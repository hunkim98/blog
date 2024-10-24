uniform float u_time;

void main() {
        // projectionMatrix, modelViewMatrix, position -> passed in from Three.js
        // parametric surface
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, position.z, 1.0);

  // let us say we want to 

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, position.z, 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, sin(position.z), position.z, 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, sin(position.z) + position.y, position.z, 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, sin(position.z / 4.0) + position.y, position.z, 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, 4.0 * sin(u_time) + position.y, position.z, 1.0);
}