uniform float u_time;
uniform float planeWidth;
uniform float planeHeight;

void main() {
        // projectionMatrix, modelViewMatrix, position -> passed in from Three.js
        // parametric surface

  float t = u_time;

  // we are going to create a rocchetti pasta surface

  float u = position.x;
  float v = position.y;

  float r = 15.0 - 9.0 * cos(u / 3.0);
  float theta = v;

  // ploar coordinate is changing cartesian coordinate 
  // x = r * cos(theta)
  // y = r * sin(theta)
  // z = u

  float x = u;
  // float y = position.y;
  float y = r * sin(theta);
  // float z = wave(x, y, t) * 2.0;
  float z = r * cos(theta);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(x, y, z, 1.0);
}
