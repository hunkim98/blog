uniform float u_time;
uniform float planeWidth;
uniform float planeHeight;

float wave(float x, float y, float t) {
  float d = sqrt(x * x + y * y);
  return sin(d + t);
}

void main() {
        // projectionMatrix, modelViewMatrix, position -> passed in from Three.js
        // parametric surface

  float t = u_time;
  float u = position.x;
  float v = position.y;

  // float x = u * cos(v);
  // float y = u * sin(v);
  // float z = u;

  float x = u * cos(v);
  // float y = position.y;
  float y = u;
  // float z = wave(x, y, t) * 2.0;
  float z = u * sin(v);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(x, y, z, 1.0);
}