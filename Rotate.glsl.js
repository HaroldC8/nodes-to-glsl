`
// https://docs.unity3d.com/Packages/com.unity.shadergraph@6.9/manual/Rotate-Node.html
vec2 rotateRadians(vec2 UV, vec2 Center, float Rotation)
{
    UV -= Center;
    float s = sin(Rotation);
    float c = cos(Rotation);
    mat2 rMatrix = mat2(c, -s, s, c);
    rMatrix *= 0.5;
    rMatrix += 0.5;
    rMatrix *= 2.0;
    rMatrix -= 1.0;
    vec2 temp;
    temp.x = dot(UV, rMatrix[0]);
    temp.y = dot(UV, rMatrix[1]);
    UV = temp;
    UV += Center;
    return UV;
}

vec2 rotateDegrees(vec2 UV, vec2 Center, float Rotation)
{
    Rotation = Rotation * PI/180.0;
    UV -= Center;
    float s = sin(Rotation);
    float c = cos(Rotation);
    mat2 rMatrix = mat2(c, -s, s, c);
    rMatrix *= 0.5;
    rMatrix += 0.5;
    rMatrix *= 2.0;
    rMatrix -= 1.0;
    vec2 temp;
    temp.x = dot(UV, rMatrix[0]);
    temp.y = dot(UV, rMatrix[1]);
    UV = temp;
    UV += Center;
    return UV;
}
`
