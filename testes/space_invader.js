f=0;c=32;
k=[24,60,126,219,255,90,129,66,
   24,60,126,219,255,36,90,165];
draw=_=>{f||createCanvas(w=512,w)+noStroke();
background(0);
for(x=0;x<8;x++){for(y=0;y<8;y++){h=(1<<x)&k[y+((f/32|0)%2)*8];fill(h*w,h*w,0);
rect(128+x*c,128+y*c,c,c)}}f++}