import * as THREE from 'three'
import Experience from '../Experience'
import vertex from '../shaders/base/vertex.glsl'
import fragment from '../shaders/base/fragment.glsl'

export default class Plane {
   constructor() {

      this.experience = new Experience()
      this.debug = this.experience.debug
      this.scene = this.experience.scene

      this.setGeometry()
      this.setMaterial()
      this.setMesh()
      this.update()

      if (this.debug) {
         this.debugFolder = this.debug.addFolder({
            title: 'Plane',
            expanded: true
         })
      }
   }

   setGeometry() {
      this.geometry = new THREE.PlaneGeometry(3, 3, 32, 32)
   }

   setMaterial() {
      this.material = new THREE.ShaderMaterial({
         vertexShader: vertex,
         fragmentShader: fragment,
         transparent: true,
         uniforms: {
            uFrequency: { value: 10 },
            uTime: { value: 0 }
         }
      })
   }

   setMesh() {
      this.mesh = new THREE.Mesh(this.geometry, this.material)
      this.scene.add(this.mesh)
   }

   update() {
      this.material.uniforms.uTime.value += 0.02
   }
}