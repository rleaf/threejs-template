import * as THREE from 'three'
import Experience from "../Experience"
import Environment from './Environment'
import Box from './Box'
import Plane from './Plane'

export default class World {
   constructor() {
      
      this.experience = new Experience()
      this.time = this.experience.time
      this.scene = this.experience.scene
      this.environment = new Environment()
      // this.box = new Box()
      this.plane = new Plane()

      this.scene.background = new THREE.Color(0x252023)
   }

   update() {
      // this.box.update()
      this.plane.update()
   }
}