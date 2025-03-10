
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

const buyerFormSchema = z.object({
  transactionId: z.string().min(1, { message: "Transaction ID is required" }),
  buyerLcDate: z.string().min(1, { message: "Buyer LC Date is required" }),
  buyerLcNumber: z.string().min(1, { message: "Buyer LC Number is required" }),
  buyerLcIssuingBank: z.string().min(1, { message: "Buyer LC Issuing Bank is required" }),
  dueDateWithBuyer: z.string().min(1, { message: "Due Date with Buyer is required" }),
  lcAdvisingBank: z.string().min(1, { message: "LC Advising Bank is required" }),
});

type BuyerFormValues = z.infer<typeof buyerFormSchema>;

interface BuyerFormProps {
  initialData?: Partial<BuyerFormValues>;
  onSubmit: (data: BuyerFormValues) => void;
  onCancel: () => void;
}

export function BuyerForm({ initialData, onSubmit, onCancel }: BuyerFormProps) {
  const form = useForm<BuyerFormValues>({
    resolver: zodResolver(buyerFormSchema),
    defaultValues: {
      transactionId: initialData?.transactionId || "",
      buyerLcDate: initialData?.buyerLcDate || "",
      buyerLcNumber: initialData?.buyerLcNumber || "",
      buyerLcIssuingBank: initialData?.buyerLcIssuingBank || "",
      dueDateWithBuyer: initialData?.dueDateWithBuyer || "",
      lcAdvisingBank: initialData?.lcAdvisingBank || "",
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
            name="buyerLcDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Buyer LC Date</FormLabel>
                <FormControl>
                  <Input placeholder="DD-MMM-YYYY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="buyerLcNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Buyer LC Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Buyer LC Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="buyerLcIssuingBank"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Buyer LC Issuing Bank</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Buyer LC Issuing Bank" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dueDateWithBuyer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Due Date with Buyer</FormLabel>
                <FormControl>
                  <Input placeholder="DD-MMM-YYYY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lcAdvisingBank"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LC Advising Bank</FormLabel>
                <FormControl>
                  <Input placeholder="Enter LC Advising Bank" {...field} />
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
