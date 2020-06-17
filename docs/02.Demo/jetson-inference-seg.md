# Segmentation

## Segmentation demo(Jetson inference)

[dusty-nv/jetson-inference/](https://github.com/dusty-nv/jetson-inference/blob/786ac1d4fc7609d019efcabf53375c6d0ade98b6/python/examples/segnet-camera.py)


![YOUTUBE](Y3vaSZI_FQ0)

```
import jetson.inference
import jetson.utils
import ctypes

width = 1280
height = 720
cam = "/dev/video0"
net = jetson.inference.segNet("fcn-resnet18-voc")
net.SetOverlayAlpha(175.0)
img_overlay = jetson.utils.cudaAllocMapped(width * height * 4 * ctypes.sizeof(ctypes.c_float))
img_mask = jetson.utils.cudaAllocMapped(width/2 * height/2 * 4 * ctypes.sizeof(ctypes.c_float))

camera = jetson.utils.gstCamera(width, height, cam)
display = jetson.utils.glDisplay()

while display.IsOpen():
	img, width, height = camera.CaptureRGBA()
	net.Process(img, width, height, "void")
	net.Overlay(img_overlay, width, height, "linear")
	net.Mask(img_mask, width/2, height/2, "linear")

	display.BeginRender()
	display.Render(img_overlay, width, height)
	display.Render(img_mask, width/2, height/2, width)
	display.EndRender()

	display.SetTitle("Segmentation | Network {:.0f} FPS".format(net.GetNetworkFPS()))
```