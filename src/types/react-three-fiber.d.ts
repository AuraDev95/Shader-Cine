import { Object3DNode } from '@react-three/fiber'
import { BlobShaderMaterialImpl } from '../components/ShaderCanvas'

declare module '@react-three/fiber' {
  interface ThreeElements {
    blobShaderMaterial: Object3DNode<BlobShaderMaterialImpl, typeof BlobShaderMaterialImpl>
  }
} 