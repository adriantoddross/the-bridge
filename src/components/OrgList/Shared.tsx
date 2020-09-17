export enum Fields {
  None,
  TextField,
  SelectType,
  SelectNeed,
}

export interface OrgListErrorProps {
  error: Boolean;
  field: Fields;
  helperText: String;
}
