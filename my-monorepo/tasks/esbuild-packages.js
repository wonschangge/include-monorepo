import fg from 'fast-glob';
import { build } from 'esbuild';

export const buildPackage = async (paths) => {
    const builds = [];
    if (paths.length) {
        builds.push(
            build({
                entryPoints: paths,
                bundle: false,
                outdir: '.',
                outbase: '.',
                sourcemap: false,
            }).catch(() => process.exit(1))
        );
    }
};

export const watchFiles = async () => {
    const files = await fg([
        './packages/**/!(*.d).ts',
    ]);
    return files;
};

export const buildTSFiles = async () => {
    const files = await watchFiles();
    console.log(files)
    buildPackage(files);
};

buildTSFiles();
