void mainImage( out vec4 fragColor, in vec2 fragCoord )
{

    vec2 uv = (fragCoord.xy-.5*iResolution.xy) / iResolution.y;
    vec2 st = vec2(atan(uv.x, uv.y), length(uv));
    uv = vec2 (st.x/6.2831+.5, st.y);
    float x = uv.x*200.+1.5*iTime;//<--------------------
    float m = min(fract(x), fract(1.-x));
    float c = smoothstep(0., 1., m*.3+.2-uv.y);

    fragColor = vec4(c);
},

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{

    vec2 uv = (fragCoord.xy-.5*iResolution.xy) / iResolution.y;
    vec2 st = vec2(atan(uv.x, uv.y), length(uv));
    uv = vec2 (st.x/6.2831+.5, st.y);
    float x = uv.x*200.+10.*iTime;
    float m = min(fract(x), fract(1.-x));
    float c = smoothstep(0., 1., m*.3+.2-uv.y);

    fragColor = vec4(c);
},

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{

    vec2 uv = (fragCoord.xy-.5*iResolution.xy) / iResolution.y;
    vec2 st = vec2(atan(uv.x, uv.y), length(uv));
    uv = vec2 (st.x/6.2831+.5, st.y);
    float x = uv.x*200.+1000.*iTime;
    float m = min(fract(x), fract(1.-x));
    float c = smoothstep(0., 1., m*.3+.2-uv.y);

    fragColor = vec4(c);
},

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{

    vec2 uv = (fragCoord.xy-.5*iResolution.xy) / iResolution.y;
    vec2 st = vec2(atan(uv.x, uv.y), length(uv));
    uv = vec2 (st.x/6.2831+.5, st.y);
    float x = uv.x*200.+100.*iTime;
    float m = min(fract(x), fract(1.-x));
    float c = smoothstep(0., 1., m*.3+.2-uv.y);

    fragColor = vec4(c);
},

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{

    vec2 uv = (fragCoord.xy-.5*iResolution.xy) / iResolution.y;
    vec2 st = vec2(atan(uv.x, uv.y), length(uv));
    uv = vec2 (st.x/6.2831+.5, st.y);
    float x = uv.x*2000.+1000.*iTime;
    float m = min(fract(x), fract(1.-x));
    float c = smoothstep(0., 1., m*.3+.2-uv.y);

    fragColor = vec4(c);
},

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{

    vec2 uv = (fragCoord.xy-.5*iResolution.xy) / iResolution.y;
    vec2 st = vec2(atan(uv.x, uv.y), length(uv));
    uv = vec2 (st.x/6.2831+.5, st.y);
    float x = uv.x*2000.+1000.*0.5+iTime;
    float m = min(fract(x), fract(1.-x));
    float c = smoothstep(0., 1., m*.3+.2-uv.y);

    fragColor = vec4(c);
},

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{

    vec2 uv = (fragCoord.xy-.5*iResolution.xy) / iResolution.y;
    vec2 st = vec2(atan(uv.x, uv.y), length(uv));
    uv = vec2 (st.x/6.2831+.5, st.y);
    float x = uv.x*3.+1000.*iTime;
    float m = min(fract(x), fract(1.-x));
    float c = smoothstep(0., 1., m*.3+.2-uv.y);

    fragColor = vec4(c);
},

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{

    vec2 uv = (fragCoord.xy-.5*iResolution.xy) / iResolution.y;
    vec2 st = vec2(atan(uv.x, uv.y), length(uv));
    uv = vec2 (st.x/6.2831+.5, st.y);
    float x = uv.x*2000.+1000.*0.5+iTime;
    float m = min(fract(x), fract(1.-x));
    float c = smoothstep(0., 1., m*.3+.2-uv.y);

    fragColor = vec4(c);
}
