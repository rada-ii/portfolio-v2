export interface ContactMessage {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: Date;
  read: boolean;
}
