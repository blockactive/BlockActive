import {
  AddACorruptAddress as AddACorruptAddressEvent,
  RemoveCorruptAddress as RemoveCorruptAddressEvent
} from "../generated/AddressValidator/AddressValidator"
import { AddACorruptAddress, RemoveCorruptAddress } from "../generated/schema"

export function handleAddACorruptAddress(event: AddACorruptAddressEvent): void {
  let entity = new AddACorruptAddress(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._address = event.params._address

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRemoveCorruptAddress(
  event: RemoveCorruptAddressEvent
): void {
  let entity = new RemoveCorruptAddress(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._address = event.params._address

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
