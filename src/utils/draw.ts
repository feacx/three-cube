import {
  Scene,
  Mesh,
  BoxBufferGeometry,
  MeshLambertMaterial,
  AxesHelper,
  PointLight,
  AmbientLight,
  PerspectiveCamera,
  WebGLRenderer,
} from "three";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { VRButton } from 'three/examples/jsm/webxr/VRButton';

export class Artist {

  private camera;
  private renderer;
  private scene;
  private cube;

  constructor() {
    const scene = new Scene();
    this.scene = scene;

    const geometry = new BoxBufferGeometry(50, 50, 50);
    const material = new MeshLambertMaterial({
      color: 0xff00ff,
      opacity: 0.9,
      transparent: true,
      wireframe: false,
    });

    const cube = new Mesh(geometry, material);
    this.cube = cube;
    scene.add(cube);

    /**
     * 辅助坐标系
     */
    const axesHelper = new AxesHelper(1001);
    scene.add(axesHelper);

    /**
     * 添加光源
     */
    const point = new PointLight(0xfffffff);
    point.position.set(100, 100, 100);
    scene.add(point);

    /**
     * 环境光
     */
    const ambient = new AmbientLight(0x444444);
    scene.add(ambient);

    /**
     * 相机设置
     */
    const width = window.innerWidth;
    const height = window.innerHeight;

    const k = width / height; // 窗口宽高比
    const s = 100; // 三维场景显示范围控制系数

    /**
     * 创建相机对象
     */
    const camera = new PerspectiveCamera(45, k, 1, 1000);
    this.camera = camera;
    camera.position.set(200, 50, s);
    camera.lookAt(scene.position);

    /**
     * 创建渲染器
     */
    const renderer = new WebGLRenderer()
    this.renderer = renderer;
    renderer.setSize(width, height); // 渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1); // 背景颜色

    /**
     * 挂载至页面
     */
    const dom = document.getElementById('container');
    dom?.appendChild(renderer.domElement);

    new OrbitControls(camera, this.renderer.domElement);

    this.render();
  }

  render() {
    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;
    // this.cube.rotation.z += 0.01;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this.render());
  }
}
