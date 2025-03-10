
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { FormValues, operationalFormSchema } from "./types";

export function useOperationalForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(operationalFormSchema),
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

  return {
    form,
    isSubmitting,
    onSubmit
  };
}
