
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

interface QuantitySectionProps {
  form: UseFormReturn<FormValues>;
}

export function QuantitySection({ form }: QuantitySectionProps) {
  return (
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
  );
}
