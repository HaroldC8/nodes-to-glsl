export default /*glsl*/`

// https://docs.unity3d.com/Packages/com.unity.shadergraph@6.9/manual/Twirl-Node.html
vec2 twirl(vec2 UV, vec2 Center, float Strength, vec2 Offset)
{
    vec2 delta = UV - Center;
    float angle = Strength * length(delta);
    float x = cos(angle) * delta.x - sin(angle) * delta.y;
    float y = sin(angle) * delta.x + cos(angle) * delta.y;
    return vec2(x + Center.x + Offset.x, y + Center.y + Offset.y);
}
`;
