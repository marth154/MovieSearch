export interface Email {
  email: string;
  did_you_mean: string;
  user: string;
  domain: string;
  format_valid: boolean;
  mx_found: boolean;
  smtp_check: boolean;
  catch_all?: any;
  role: boolean;
  disposable: boolean;
  free: boolean;
  score: number;
}