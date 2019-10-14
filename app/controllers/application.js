import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        hapus(mahasiswa) {
            mahasiswa.destroyRecord(mahasiswa);
        }
    }
});
