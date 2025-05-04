function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Ruiz Morales;Ricardo;;;
FN:Ricardo Ruiz Morales
TEL:+57 3127773019
EMAIL;TYPE=WORK: calidad@acerosymallas.com
NOTE: Director de Calidad
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
