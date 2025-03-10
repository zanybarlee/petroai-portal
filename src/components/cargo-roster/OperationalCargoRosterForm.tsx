
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const formSchema = z.object({
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

type FormValues = z.infer<typeof formSchema>;

export default function OperationalCargoRosterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tradeType: "",
      vesselName: "",
      productType: "",
      productName: "",
      poNumber: "",
      loadPort: "",
      loadPortSurveyor: "",
      dischargePort: "",
      dischargePortSurveyor: "",
      quantityNominated: "",
      quantityLoadedBBLs: "",
      quantityLoadedMT: "",
      buyer: "",
      supplier: "",
      layDayDuration: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // In a real app, this would be an API call
      console.log(data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Transaction created successfully", {
        description: "The operational cargo roster transaction has been created.",
      });
      form.reset();
    } catch (error) {
      toast.error("Failed to create transaction", {
        description: "There was an error creating the transaction. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-6 border rounded-md">
        <h3 className="text-lg font-medium mb-4">Operational Cargo Roster Transaction</h3>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium text-sm text-muted-foreground">Lay Day Data</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="layDayStart"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Lay Day Start</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Select date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="layDayDuration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lay Day Duration</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter duration in days" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-sm text-muted-foreground">Vessel Data</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="tradeType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Trade Type</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select trade type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="import">Import</SelectItem>
                          <SelectItem value="export">Export</SelectItem>
                          <SelectItem value="domestic">Domestic</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="vesselName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vessel Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter vessel name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-sm text-muted-foreground">Cargo Data</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="productType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Type</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select product type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="crude">Crude</SelectItem>
                          <SelectItem value="refined">Refined</SelectItem>
                          <SelectItem value="gas">Gas</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter product name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="poNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PO Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter PO number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="poDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>PO Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Select date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-sm text-muted-foreground">Load / Discharge Port Data</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <FormField
                  control={form.control}
                  name="loadPort"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Load Port</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter load port" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="loadPortSurveyor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Load Port Surveyor</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter load port surveyor" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="loadPortDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Load Port Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Select date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="dischargePort"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discharge Port</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter discharge port" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="dischargePortSurveyor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discharge Port Surveyor</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter discharge port surveyor" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="dischargePortDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Discharge Port Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Select date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-sm text-muted-foreground">Quantity Data</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <FormField
                  control={form.control}
                  name="quantityNominated"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity Nominated</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter quantity nominated" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="quantityLoadedBBLs"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity Loaded BBLs</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter quantity loaded in BBLs" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="quantityLoadedMT"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity Loaded MT</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter quantity loaded in MT" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-sm text-muted-foreground">Buyer/Supplier Information</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="buyer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Buyer</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter buyer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="supplier"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Supplier</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter supplier" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <Button variant="outline" type="button" onClick={() => form.reset()}>
                Reset
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Transaction"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
