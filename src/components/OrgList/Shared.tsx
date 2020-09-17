export enum Fields {
  None,
  TextField,
  Select,
}

export interface OrgListErrorProps {
  error: Boolean;
  field: Fields;
  helperText: String;
}
