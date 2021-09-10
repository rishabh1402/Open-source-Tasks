import Rive from 'rive-canvas';

addEventListener('message', async ({ data }) => {
    const { canvas, url, animations } = data;

    // Load .riv file
    const req = new Request(url);
    const loadRive = Rive({ locateFile: (file: string) => 'images/772-1537-check-icon.riv' + file, });
    const loadFile = fetch(req).then((res) => res.arrayBuffer());
    const [ rive, buf ] = await Promise.all([ loadRive, loadFile ]);
    const file = rive.load(new Uint8Array(buf));
    const artboard = file.defaultArtboard();

    // Associate CanvasRenderer with offset context
    const ctx = canvas.getContext('2d');
    const renderer = new rive.CanvasRenderer(ctx);

    // Move frame of each animation
    const animate = animations.map(name => {
        const animation = artboard.animationByName(name);
        const instance = new rive.LinearAnimationInstance(animation);
        return (delta: number) => {
            instance.advance(delta);
            instance.apply(artboard, 1.0);
        }
    });

    // Draw of the canvas
    let lastTime = 0;
    function draw(time: number) {
        if (!lastTime) lastTime = time;
    
        const delta = (time - lastTime) / 1000;
        lastTime = time;

        animate.forEach(cb => cb(delta))
        artboard.advance(delta);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        renderer.align(rive.Fit.contain, rive.Alignment.center, {
            minX: 0,
            minY: 0,
            maxX: canvas.width,
            maxY: canvas.height
        }, artboard.bounds);
        artboard.draw(renderer);
        ctx.restore();
        requestAnimationFrame(draw);
    }

    // Animation Frame run in the WebWorker
    requestAnimationFrame(draw);
});