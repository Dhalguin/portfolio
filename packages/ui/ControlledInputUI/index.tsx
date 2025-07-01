import { Controller, FieldValues } from 'react-hook-form'
import { ControlledInputUIProps } from './types'

export const ControlledInputUI = <T extends FieldValues>({
  control,
  name,
  label,
  inputType = 'text',
  placeholder,
  error,
}: ControlledInputUIProps<T>) => {
  const borderColor = error ? 'border-red-500' : 'border-primary-500'
  const baseClasses = `border bg-background rounded-lg py-2 px-3 w-full focus:outline-0 focus:border focus:border-primary-100 ${borderColor}`

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <label className="text-white font-semibold" htmlFor={name}>
              {label}
            </label>
            <input
              className={baseClasses}
              id={name}
              name={name}
              type={inputType}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
          </div>
          {error && <span className="text-sm text-red-500 font-semibold">{error.message}</span>}
        </div>
      )}
    />
  )
}
