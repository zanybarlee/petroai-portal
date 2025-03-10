
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { LayDaySection } from "./operational-form/sections/LayDaySection";
import { VesselSection } from "./operational-form/sections/VesselSection";
import { CargoSection } from "./operational-form/sections/CargoSection";
import { PortSection } from "./operational-form/sections/PortSection";
import { QuantitySection } from "./operational-form/sections/QuantitySection";
import { BuyerSupplierSection } from "./operational-form/sections/BuyerSupplierSection";
import { useOperationalForm } from "./operational-form/useOperationalForm";

export default function OperationalCargoRosterForm() {
  const { form, isSubmitting, onSubmit } = useOperationalForm();

  return (
    <div className="space-y-6">
      <div className="p-6 border rounded-md">
        <h3 className="text-lg font-medium mb-4">Operational Cargo Roster Transaction</h3>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <LayDaySection form={form} />
            <VesselSection form={form} />
            <CargoSection form={form} />
            <PortSection form={form} />
            <QuantitySection form={form} />
            <BuyerSupplierSection form={form} />
            
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
