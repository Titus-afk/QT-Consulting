import { Input, InputSlot, InputField } from "@/components/ui/input";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = () => {
  return (
    <Input
      className="flex-1 bg-[#FFFFFF25] text-white border-white"
      variant="rounded"
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      style={{ borderColor: "#FFFFFF25" }}
    >
      <InputSlot className=" px-2 h-full mr-0">
        <Ionicons name="search" size={22} color="#FFFFFF50" />
      </InputSlot>
      <InputField className="pl-0 text-white" placeholder="Enter Text here..." style={{ color: "#FFFFFF" }} />
    </Input>
  );
};

export default SearchBar;
