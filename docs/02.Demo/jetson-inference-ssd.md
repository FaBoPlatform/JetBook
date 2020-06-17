# Object detection

## Object detection demo(Jetson inference)

[dusty-nv/jetson-inference/](https://github.com/dusty-nv/jetson-inference/blob/786ac1d4fc7609d019efcabf53375c6d0ade98b6/docs/detectnet-example-2.md)

![YOUTUBE](kq1wH8T-bm8)

```
import jetson.inference
import jetson.utils

net = jetson.inference.detectNet("ssd-mobilenet-v2", threshold=0.5)
camera = jetson.utils.gstCamera(1280, 720, "/dev/video0")  # using V4L2
display = jetson.utils.glDisplay()

while display.IsOpen():
	img, width, height = camera.CaptureRGBA()
	detections = net.Detect(img, width, height)
	display.RenderOnce(img, width, height)
	display.SetTitle("Object Detection | Network {:.0f} FPS".format(net.GetNetworkFPS()))
```

