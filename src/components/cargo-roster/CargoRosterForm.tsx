
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon, Save } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  // Lay Day Data
  layDayStart: z.date(),
  layDayEnd: z.date(),
  layDayTerm: z.string().min(1, "Required"),
  layDayComments: z.string().optional(),
  
  // Vessel Data
  tradeType: z.string().min(1, "Required"),
  
  // Cargo Data
  productName: z.string().min(1, "Required"),
  
  // Quantity Data
  quantityNominated: z.string().min(1, "Required"),
  
  // Transaction Data
  buyer: z.string().min(1, "Required"),
  sellFormula: z.string().min(1, "Required"),
  sellValue: z.string().min(1, "Required"),
  supplier: z.string().min(1, "Required"),
  buyFormula: z.string().min(1, "Required"),
  buyValue: z.string().min(1, "Required"),
});

export default function CargoRosterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      layDayTerm: "",
      layDayComments: "",
      tradeType: "",
      productName: "",
      quantityNominated: "",
      buyer: "",
      sellFormula: "",
      sellValue: "",
      supplier: "",
      buyFormula: "",
      buyValue: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Here you would typically submit the data to your backend
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6 border rounded-md p-4">
            <h3 className="text-lg font-medium">Lay Day Information</h3>
            
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
              name="layDayEnd"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Lay Day End</FormLabel>
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
              name="layDayTerm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lay Day Term</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter lay day term" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="layDayComments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lay Day Comments</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter any comments" 
                      className="resize-none"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-6 border rounded-md p-4">
            <h3 className="text-lg font-medium">Vessel and Cargo Information</h3>
            
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
                      <SelectItem value="domestic">Domestic</SelectItem>
                      <SelectItem value="international">International</SelectItem>
                      <SelectItem value="coastwise">Coastwise</SelectItem>
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
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select product" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="crude">Crude Oil</SelectItem>
                      <SelectItem value="gasoline">Gasoline</SelectItem>
                      <SelectItem value="diesel">Diesel</SelectItem>
                      <SelectItem value="jet">Jet Fuel</SelectItem>
                      <SelectItem value="lpg">LPG</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="quantityNominated"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity Nominated</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter quantity" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6 border rounded-md p-4">
            <h3 className="text-lg font-medium">Sell Information</h3>
            
            <FormField
              control={form.control}
              name="buyer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Buyer</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select buyer" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="buyer1">Buyer 1</SelectItem>
                      <SelectItem value="buyer2">Buyer 2</SelectItem>
                      <SelectItem value="buyer3">Buyer 3</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="sellFormula"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sell Formula</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select formula" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="formula1">MOPS + Premium</SelectItem>
                      <SelectItem value="formula2">Fixed Price</SelectItem>
                      <SelectItem value="formula3">Market Price</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="sellValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sell Value</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter value" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-6 border rounded-md p-4">
            <h3 className="text-lg font-medium">Buy Information</h3>
            
            <FormField
              control={form.control}
              name="supplier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supplier</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select supplier" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="supplier1">Supplier 1</SelectItem>
                      <SelectItem value="supplier2">Supplier 2</SelectItem>
                      <SelectItem value="supplier3">Supplier 3</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="buyFormula"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Buy Formula</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select formula" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="formula1">MOPS + Premium</SelectItem>
                      <SelectItem value="formula2">Fixed Price</SelectItem>
                      <SelectItem value="formula3">Market Price</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="buyValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Buy Value</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter value" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline">Cancel</Button>
          <Button type="submit" className="gap-2">
            <Save className="w-4 h-4" />
            Save Transaction
          </Button>
        </div>
      </form>
    </Form>
  );
}
