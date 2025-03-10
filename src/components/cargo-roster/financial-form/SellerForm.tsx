
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const sellerFormSchema = z.object({
  transactionId: z.string().min(1, { message: "Transaction ID is required" }),
  lcIssuingDate: z.string().min(1, { message: "LC Issuing Date is required" }),
  lcType: z.string().min(1, { message: "LC Type is required" }),
  lcNumber: z.string().min(1, { message: "LC Number is required" }),
  lcCredit: z.string().min(1, { message: "LC Credit is required" }),
  lcExpiryDate: z.string().min(1, { message: "LC Expiry Date is required" }),
  lcSellStatus: z.string().min(1, { message: "LC Sell Status is required" }),
  lcSellerBank: z.string().min(1, { message: "LC Seller Bank is required" }),
  contractParty: z.string().min(1, { message: "Contract Party is required" }),
});

type SellerFormValues = z.infer<typeof sellerFormSchema>;

interface SellerFormProps {
  initialData?: Partial<SellerFormValues>;
  onSubmit: (data: SellerFormValues) => void;
  onCancel: () => void;
}

export function SellerForm({ initialData, onSubmit, onCancel }: SellerFormProps) {
  const form = useForm<SellerFormValues>({
    resolver: zodResolver(sellerFormSchema),
    defaultValues: {
      transactionId: initialData?.transactionId || "",
      lcIssuingDate: initialData?.lcIssuingDate || "",
      lcType: initialData?.lcType || "",
      lcNumber: initialData?.lcNumber || "",
      lcCredit: initialData?.lcCredit || "",
      lcExpiryDate: initialData?.lcExpiryDate || "",
      lcSellStatus: initialData?.lcSellStatus || "",
      lcSellerBank: initialData?.lcSellerBank || "",
      contractParty: initialData?.contractParty || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="transactionId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transaction ID</FormLabel>
                <FormControl>
                  <Input {...field} readOnly />
                </FormControl>
                <FormMessage />
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
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lcType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LC Type</FormLabel>
                <FormControl>
                  <Input placeholder="Enter LC Type" {...field} />
                </FormControl>
                <FormMessage />
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
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lcCredit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LC Credit</FormLabel>
                <FormControl>
                  <Input placeholder="Enter LC Credit" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lcExpiryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LC Expiry Date</FormLabel>
                <FormControl>
                  <Input placeholder="DD-MMM-YYYY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lcSellStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LC Sell Status</FormLabel>
                <FormControl>
                  <Input placeholder="Enter LC Sell Status" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lcSellerBank"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LC Seller Bank</FormLabel>
                <FormControl>
                  <Input placeholder="Enter LC Seller Bank" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contractParty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contract Party</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Contract Party" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            Back
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
