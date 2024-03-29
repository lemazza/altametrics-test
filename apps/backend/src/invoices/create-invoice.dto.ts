export class CreateInvoiceDto {
  readonly amount: number;
  readonly due_date: string;
  readonly details: string;
  readonly user_id: string;
}
