import firmware from '../../public/firmware.json'

export function FirmwareVersion() {
  return <>{firmware.version}</>
}
