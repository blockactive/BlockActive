import {
  AddACorruptAddress as AddACorruptAddressEvent,
  RemoveCorruptAddress as RemoveCorruptAddressEvent,
} from "../generated/AddressValidator/AddressValidator";
import { CorruptAddress } from "../generated/schema";

export function handleAddACorruptAddress(event: AddACorruptAddressEvent): void {
  
  let  entity = new CorruptAddress(event.params._address.toHexString());

  entity.save();
}
