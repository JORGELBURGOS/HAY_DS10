// Evaluación HAY: cálculo y PDF funcional
function generatePDF() {
    if (!window.currentEvaluation) {
        showNotification('No hay evaluación para generar PDF', 'error');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const evalData = window.currentEvaluation;
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const centerX = pageWidth / 2;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(24);
    doc.setTextColor(67, 97, 238);
    doc.text('Evaluación de Puesto', centerX, 30, { align: 'center' });

    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(`Puesto: ${evalData.jobTitle}`, margin, 50);
    doc.text(`Fecha: ${new Date(evalData.evaluationDate).toLocaleDateString()}`, margin, 60);

    doc.setFontSize(14);
    doc.text(`Puntaje Total: ${evalData.scores.total}`, margin, 80);
    doc.text(`Nivel: ${evalData.level.level}`, margin, 90);

    doc.text('Descripción del Nivel:', margin, 110);
    doc.setFontSize(12);
    const descLines = doc.splitTextToSize(evalData.level.description, pageWidth - 2 * margin);
    doc.text(descLines, margin, 120);

    doc.addPage();
    doc.setFontSize(18);
    doc.setTextColor(67, 97, 238);
    doc.text('Detalle de Puntajes', margin, 20);

    doc.autoTable({
        startY: 30,
        head: [['Factor', 'Puntaje']],
        body: [
            ['Know-How', evalData.scores.knowHow],
            ['Solución de Problemas', evalData.scores.problemSolving],
            ['Responsabilidad', evalData.scores.responsibility],
            ['Total', evalData.scores.total]
        ],
        headStyles: {
            fillColor: [67, 97, 238],
            textColor: [255, 255, 255]
        }
    });

    doc.addPage();
    doc.setFontSize(18);
    doc.setTextColor(67, 97, 238);
    doc.text('Descripción del Puesto', margin, 20);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const jobDescLines = doc.splitTextToSize(evalData.jobDescription || 'No especificado', pageWidth - 2 * margin);
    doc.text(jobDescLines, margin, 30);

    const respY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 20 : 80;
    doc.setFontSize(14);
    doc.text('Responsabilidades:', margin, respY);
    doc.setFontSize(12);
    const responsibilitiesLines = doc.splitTextToSize(evalData.jobResponsibilities || 'No especificado', pageWidth - 2 * margin);
    doc.text(responsibilitiesLines, margin, respY + 10);

    doc.save(`Evaluacion_${evalData.jobTitle.replace(/\s+/g, '_')}.pdf`);
    showNotification('PDF generado correctamente', 'success');
}

function showNotification(message, type) {
    const container = document.querySelector('.notification-container');
    const div = document.createElement('div');
    div.className = `notification ${type}`;
    div.textContent = message;
    container.appendChild(div);
    setTimeout(() => container.removeChild(div), 3000);
}

function saveEvaluationToLocal(evaluation) {
    if (!evaluation) return;
    const saved = JSON.parse(localStorage.getItem('evaluations') || '[]');
    saved.push(evaluation);
    localStorage.setItem('evaluations', JSON.stringify(saved));
    showNotification('Evaluación guardada localmente', 'success');
}

function closeModal() {
    document.getElementById('saveModal').style.display = 'none';
}
