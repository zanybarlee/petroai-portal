
import { z } from "zod";

export const operationalFormSchema = z.object({
  layDayStart: z.date({
    required_error: "Lay Day Start is required",
  }),
  layDayDuration: z.string().min(1, { message: "Lay Day Duration is required" }),
  tradeType: z.string().min(1, { message: "Trade Type is required" }),
  vesselName: z.string().min(1, { message: "Vessel Name is required" }),
  productType: z.string().min(1, { message: "Product Type is required" }),
  productName: z.string().min(1, { message: "Product Name is required" }),
  poNumber: z.string().min(1, { message: "PO Number is required" }),
  poDate: z.date({
    required_error: "PO Date is required",
  }),
  loadPort: z.string().min(1, { message: "Load Port is required" }),
  loadPortSurveyor: z.string().min(1, { message: "Load Port Surveyor is required" }),
  loadPortDate: z.date({
    required_error: "Load Port Date is required",
  }),
  dischargePort: z.string().min(1, { message: "Discharge Port is required" }),
  dischargePortSurveyor: z.string().min(1, { message: "Discharge Port Surveyor is required" }),
  dischargePortDate: z.date({
    required_error: "Discharge Port Date is required",
  }),
  quantityNominated: z.string().min(1, { message: "Quantity Nominated is required" }),
  quantityLoadedBBLs: z.string().min(1, { message: "Quantity Loaded BBLs is required" }),
  quantityLoadedMT: z.string().min(1, { message: "Quantity Loaded MT is required" }),
  buyer: z.string().min(1, { message: "Buyer is required" }),
  supplier: z.string().min(1, { message: "Supplier is required" }),
});

export type FormValues = z.infer<typeof operationalFormSchema>;
