import { ReactThreeFiber } from '@react-three/fiber'
import { BlobShaderMaterialImpl } from '@/components/ShaderCanvas'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      blobShaderMaterial: ReactThreeFiber.Object3DNode<BlobShaderMaterialImpl, typeof BlobShaderMaterialImpl>
    }
  }
} 