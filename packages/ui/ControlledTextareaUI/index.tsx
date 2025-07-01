import { Controller, FieldValues } from 'react-hook-form'
import { ControlledTextareaUIProps } from './types'

export const ControlledTextareaUI = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  error,
}: ControlledTextareaUIProps<T>) => {
  const borderColor = error ? 'border-red-500' : 'border-primary-500'
  const baseClasses = `border bg-background rounded-lg py-2 px-3 w-full focus:outline-0 focus:border focus:border-primary-100 min-h-48 resize-none ${borderColor}`

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
            <textarea
              className={baseClasses}
              id={name}
              name={name}
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
