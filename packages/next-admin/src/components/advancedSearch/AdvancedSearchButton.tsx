import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Button from "../radix/Button";
import AdvancedSearchModal from "./AdvancedSearchModal";
import { ModelName, Schema } from "../../types";

type Props = {
  resource: ModelName;
  schema: Schema;
};

const AdvancedSearchButton = ({ resource, schema }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        className="px-2"
        onClick={() => setModalOpen(true)}
      >
        <AdjustmentsHorizontalIcon className="h-6 w-6" />
      </Button>
      <AdvancedSearchModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        resource={resource}
        schema={schema}
      />
    </>
  );
};

export default AdvancedSearchButton;