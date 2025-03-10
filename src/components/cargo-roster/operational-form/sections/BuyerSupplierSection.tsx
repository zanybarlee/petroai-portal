
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";

interface BuyerSupplierSectionProps {
  form: UseFormReturn<FormValues>;
}

export function BuyerSupplierSection({ form }: BuyerSupplierSectionProps) {
  return (
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
  );
}
