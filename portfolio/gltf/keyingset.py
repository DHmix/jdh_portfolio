# Keying Set: 키잉 설정
import bpy

scene = bpy.context.scene

# Keying Set Level declarations
ks = scene.keying_sets.new(idname="1", name="ponyou")
ks.bl_description = ''

ks.use_insertkey_needed = False
ks.use_insertkey_visual = False
ks.use_insertkey_xyz_to_rgb = True

# ID's that are commonly used
id_0 = bpy.data.objects["monitor"]

# Path Definitions
ksp = ks.paths.add(id_0, '', index=-1)

