
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  id: z.string().optional(),
  transactionId: z.string().optional(),
  lcNumber: z.string().optional(),
  lcIssuingDate: z.string().optional(),
  sellerBank: z.string().optional(),
  buyerBank: z.string().optional(),
});

type SearchValues = z.infer<typeof searchSchema>;

interface SearchFormProps {
  onSearch: (values: SearchValues) => void;
}

export function FinancialSearchForm({ onSearch }: SearchFormProps) {
  const form = useForm<SearchValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      id: "",
      transactionId: "",
      lcNumber: "",
      lcIssuingDate: "",
      sellerBank: "",
      buyerBank: "",
    },
  });

  const handleSubmit = (values: SearchValues) => {
    onSearch(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID</FormLabel>
                <FormControl>
                  <Input placeholder="Enter ID" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="transactionId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transaction ID</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Transaction ID" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="lcNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LC Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter LC Number" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="lcIssuingDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LC Issuing Date</FormLabel>
                <FormControl>
                  <Input placeholder="DD-MMM-YYYY" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="sellerBank"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LC Seller Bank</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Seller Bank" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="buyerBank"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LC Buyer Bank</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Buyer Bank" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        
        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
          >
            Reset
          </Button>
          <Button type="submit">Search</Button>
        </div>
      </form>
    </Form>
  );
}
