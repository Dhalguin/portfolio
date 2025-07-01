import { Control, ErrorOption, FieldValues, Path } from 'react-hook-form'

export type ControlledInputUIProps<TFieldValues extends FieldValues = FieldValues> = {
  control: Control<TFieldValues>
  name: Path<TFieldValues>
  inputType?: 'text' | 'number' | 'password'
  label: string
  placeholder?: string
  error?: ErrorOption
}
