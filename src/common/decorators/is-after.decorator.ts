import {
  buildMessage,
  ValidateBy,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

// time limitations -> copied from overflow :D
export const IsAfter = (
  property: string,
  options?: ValidationOptions,
): PropertyDecorator =>
  ValidateBy(
    {
      name: 'IsAfter',
      constraints: [property],
      validator: {
        validate: (value: Date, args: ValidationArguments): boolean => {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as Record<string, unknown>)[
            relatedPropertyName
          ] as Date;
          return value.toISOString() > relatedValue.toISOString();
        },
        defaultMessage: buildMessage(
          (each: string): string =>
            each + '$property must be after $constraint1',
          options,
        ),
      },
    },
    options,
  );
