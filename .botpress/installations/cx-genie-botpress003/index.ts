
import type { IntegrationInstance } from '@botpress/sdk'
import type { Configuration } from './configuration'


export type CxGenieBotpress003Props = {
  enabled?: boolean
  config?: Configuration
}

export class CxGenieBotpress003 implements IntegrationInstance {
  
  
  public readonly name = 'cxGenieBotpress003'
  public readonly version = 'dev'
  public readonly id = '4486bc51-5d9d-4609-a981-eb728a1153df'
  
  public readonly enabled?: boolean
  public readonly configuration?: Configuration

  constructor(props?: CxGenieBotpress003Props) {
    this.enabled = props?.enabled
    this.configuration = props?.config
  }
}
