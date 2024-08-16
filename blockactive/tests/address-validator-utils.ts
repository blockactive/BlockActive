import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  AddACorruptAddress,
  RemoveCorruptAddress
} from "../generated/AddressValidator/AddressValidator"

export function createAddACorruptAddressEvent(
  _address: Address
): AddACorruptAddress {
  let addACorruptAddressEvent = changetype<AddACorruptAddress>(newMockEvent())

  addACorruptAddressEvent.parameters = new Array()

  addACorruptAddressEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )

  return addACorruptAddressEvent
}

export function createRemoveCorruptAddressEvent(
  _address: Address
): RemoveCorruptAddress {
  let removeCorruptAddressEvent = changetype<RemoveCorruptAddress>(
    newMockEvent()
  )

  removeCorruptAddressEvent.parameters = new Array()

  removeCorruptAddressEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )

  return removeCorruptAddressEvent
}
