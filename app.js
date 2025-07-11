// Datos de evaluación y tablas de puntajes
const evaluationData = {
    knowHow: {
        // Puntuaciones base para Competencia Técnica (matrices HAY) según nivel de puesto en la organización
        technical: {
            A: [38, 43, 50, 50, 57, 66, 66, 76, 87, 87, 100, 115, 115, 132, 152],
            B: [50, 57, 66, 66, 76, 87, 87, 100, 115, 115, 132, 152, 152, 175, 200],
            C: [66, 76, 87, 87, 100, 115, 115, 132, 152, 152, 175, 200, 200, 230, 264],
            D: [87, 100, 115, 115, 132, 152, 152, 175, 200, 200, 230, 264, 264, 304, 350],
            E: [115, 132, 152, 152, 175, 200, 200, 230, 264, 264, 304, 350, 350, 400, 460],
            F: [152, 175, 200, 200, 230, 264, 264, 304, 350, 350, 400, 460, 460, 528, 608],
            G: [200, 230, 264, 264, 304, 350, 350, 400, 460, 460, 528, 608, 608, 700, 800],
            H: [264, 304, 350, 350, 400, 460, 460, 528, 608, 608, 700, 800, 800, 920, 1056]
        },
        // Valores de nivel de Comunicación: son índices (0-7) que se sumarán
        communication: {
            1: 0,
            2: 1,
            3: 2,
            4: 3,
            5: 4,
            6: 5,
            7: 6,
            8: 7
        },
        // Valores de Ámbito de Integración: índices (0-8)
        integration: {
            1: 0,
            2: 1,
            3: 2,
            4: 3,
            5: 4,
            6: 5,
            7: 6,
            8: 7,
            9: 8
        },
        // Descripciones de cada nivel de Know-How para PDF
        descriptions: {
            technical: {
                A: "BÁSICO: Nociones aritméticas, lectura y escritura elemental. Conocimiento de instrucciones y rutinas simples adquirido a través de breves explicaciones.",
                B: "INTRODUCTORIO: Conocimiento de rutinas de trabajo y métodos estandarizados; conocimiento de datos e información general; manejo de equipos y maquinaria sencilla. El conocimiento se adquiere generalmente por medio de entrenamiento práctico en el trabajo.",
                C: "GENERAL/PROCESO/PROCEDIMIENTO: Conocimientos para la aplicación de métodos y técnicas prácticas; procedimientos y procesos de trabajo; habilidad para la operación con materiales, equipos y herramientas especializadas. El conocimiento generalmente se adquiere a través de formación especializada.",
                D: "AVANZADO: Conocimiento amplio y especializado de métodos, técnicas y procesos con conocimiento limitado de las teorías en las que se basa. Este conocimiento generalmente se adquiere a través de formación especializada o larga experiencia práctica en el trabajo.",
                E: "ESPECIALIZADO: Conocimiento contrastado en un campo técnico, científico o especializado basado en la comprensión de teorías y conceptos teóricos, así como en su contexto. Este conocimiento se adquiere normalmente a través de formación profesional o académica o de una amplia experiencia práctica.",
                F: "ESPECIALIZACIÓN MADURA: Conocimiento amplio y profundo de un campo de expertise, que requiere el dominio de diversas prácticas y precedentes, así como de conceptos complejos y principios. Este conocimiento se adquiere a través de una muy profunda y amplia experiencia generalmente reforzada con una formación académica/profesional adicional.",
                G: "ESPECIALIZACIÓN AMPLIA: Conocimiento y autoridad reconocidas en conceptos, principios y prácticas, adquiridos a través de una amplia experiencia en el negocio o de un gran desarrollo en un campo de especialización complejo.",
                H: "REFERENTE: El puesto requiere competencia excepcional y liderazgo en una disciplina científica, con conocimiento y dominio de los principios y teorías y su aplicación. Este nivel podría asociarse con trabajos innovadores."
            },
            communication: {
                1: "1. Comunica: El trato con otros implica principalmente la solicitud y el aporte de información. Se requiere amabilidad, tacto y efectividad.",
                2: "2. Razonamiento: La interacción con otros requiere comprenderles, influirles y darles servicio, aplicando el conocimiento técnico o argumentos racionales que buscan conseguir acciones o la aceptación por su parte.",
                3: "3. Cambio de comportamientos: La interacción con otros implica principalmente influir, desarrollar y motivar personas y generar comportamientos. A menudo implica liderazgo y la creación de un adecuado clima de trabajo.",
                4: "4. Inspiración: Motiva y transforma a otros a través de la comunicación.",
                5: "5. Comunicación Estratégica: Influencia externa a través de la comunicación.",
                6: "6. Comunicación Institucional: Construcción de cultura organizacional a través de la comunicación.",
                7: "7. Voz Pública: Representa a la organización como vocero público."
            },
            integration: {
                1: "T. Focalizado en tareas específicas: Ejecución de una o varias tareas específicas en cuanto a objetivo y contenido con conocimiento limitado del contexto.",
                2: "I. Específica: Ejecución o supervisión de diversas actividades específicas en cuanto a objetivo y contenido. Necesidad de interacción con otros trabajadores y conocimiento de las actividades relacionadas.",
                3: "II. Homogénea: Integración de operaciones y servicios relacionados en cuanto a su naturaleza y objetivo. Se requiere coordinación con funciones relacionadas.",
                4: "III. Heterogénea: Integración operativa o conceptual de funciones heterogéneas en naturaleza y objetivo o críticas para la consecución de los objetivos globales de negocio.",
                5: "IV. Amplia: Integración estratégica y liderazgo de operaciones de negocio importantes o dirección de una función estratégica transversal en la compañía.",
                6: "V. Ecosistemas: Integración interinstitucional y coordinación con múltiples organizaciones.",
                7: "VI. Redes Abiertas: Integración multisectorial y coordinación compleja entre diferentes sectores.",
                8: "VII. Visión Global: Integración internacional y coordinación a nivel global."
            }
        }
    },

    problemSolving: {
        // Factores de Complejidad (porcentajes multiplicadores según Know-How)
        complexity: {
            1: [0.1, 0.12, 0.14, 0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76],
            2: [0.12, 0.14, 0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87],
            3: [0.14, 0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87, 1.0],
            4: [0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87, 1.0, 1.15],
            5: [0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87, 1.0, 1.15, 1.32]
        },
        // Índices para Libertad de Pensar (letras A-H mapeadas a índice 0-...? Se usarán como índice en array de complejidad)
        thinkingFreedom: {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7
        },
        // Descripciones de niveles de Solución de Problemas
        descriptions: {
            complexity: {
                1: "1. Repetitivo: Problemas idénticos, rutina diaria sin variación.",
                2: "2. Con modelos: Problemas similares entre sí, con pequeños matices que se resuelven aplicando modelos o guías conocidas.",
                3: "3. Variable: Situaciones diferentes con cierta frecuencia, requieren análisis y adaptación de soluciones conocidas.",
                4: "4. Adaptación: Problemas nuevos que exigen desarrollar soluciones inéditas o adaptaciones creativas de conocimientos.",
                5: "5. Sin precedentes: Situaciones muy novedosas o únicas, sin referencia previa, que requieren innovación total en la solución."
            },
            thinkingFreedom: {
                A: "A. Rutina Estricta: Instrucciones detalladas y procedimientos fijados estrechamente; mínima libertad para desviarse.",
                B: "B. Rutina: Prácticas estandarizadas y lineamientos claros, con poca libertad para cambios.",
                C: "C. Semi-Rutina: Procedimientos predefinidos pero con algo de margen para ajustar detalles menores según la situación.",
                D: "D. Estandarizado: Existen múltiples procedimientos establecidos; se elige y aplica el adecuado según el caso.",
                E: "E. Definición Clara: Políticas específicas orientan la acción; se espera análisis dentro de un marco bien definido.",
                F: "F. Definición Amplia: Políticas amplias y objetivos generales; libertad moderada para interpretar y decidir soluciones.",
                G: "G. Definición Genérica: Políticas generales y valores guían las decisiones; amplia libertad de criterio profesional.",
                H: "H. Abstracto: Marco de valores, principios éticos o leyes; la resolución depende casi totalmente del juicio propio dentro de pautas muy generales."
            }
        }
    },

    responsibility: {
        // Puntuaciones base para Libertad para Actuar (matrices por nivel A-H)
        freedom: {
            A: [50, 57, 66, 76, 87, 100, 115, 132, 152, 175, 200, 230, 264, 304, 350],
            B: [66, 76, 87, 100, 115, 132, 152, 175, 200, 230, 264, 304, 350, 400, 460],
            C: [87, 100, 115, 132, 152, 175, 200, 230, 264, 304, 350, 400, 460, 528, 608],
            D: [115, 132, 152, 175, 200, 230, 264, 304, 350, 400, 460, 528, 608, 700, 800],
            E: [152, 175, 200, 230, 264, 304, 350, 400, 460, 528, 608, 700, 800, 920, 1056],
            F: [200, 230, 264, 304, 350, 400, 460, 528, 608, 700, 800, 920, 1056, 1200, 1400],
            G: [264, 304, 350, 400, 460, 528, 608, 700, 800, 920, 1056, 1200, 1400, 1600, 1800],
            H: [350, 400, 460, 528, 608, 700, 800, 920, 1056, 1200, 1400, 1600, 1800, 2000, 2200]
        },
        // Índices para Naturaleza del Impacto
        impactNature: {
            R: 0, // Repetitivo
            C: 1, // Circunstancial
            S: 2, // Servicio
            P: 3  // Primario
        },
        // Índices para Magnitud del Impacto
        magnitude: {
            N: 0, // No cuantificada
            1: 1, // Muy pequeño
            2: 2, // Pequeño
            3: 3, // Medio
            4: 4  // Grande
        },
        // Descripciones de niveles de Responsabilidad
        descriptions: {
            freedom: {
                A: "A. Control Estricto: Operaciones bajo supervisión permanente y directrices rígidas, mínima autonomía para el puesto.",
                B: "B. Control: Instrucciones establecidas y seguimiento frecuente, autonomía limitada dentro de procedimientos conocidos.",
                C: "C. Estandarizado: Procedimientos estandarizados definen la mayoría de acciones; cierta autonomía para decisiones menores.",
                D: "D. Regulación General: Políticas definidas orientan las decisiones; autonomía moderada para actuar según directrices generales.",
                E: "E. Dirección: Gestión con objetivos claros; se espera que el puesto tome decisiones para cumplir metas definidas, con bastante autonomía en su ámbito.",
                F: "F. Dirección General: Objetivos amplios y estratégicos; el puesto define cómo alcanzarlos dentro de amplios márgenes de decisión.",
                G: "G. Guía: Orientación estratégica; la posición influye en políticas y tiene alta autonomía para dirigir un área importante.",
                H: "H. Guía Estratégica: Referencia en tendencias del negocio; el puesto opera con plena autonomía estratégica, definiendo dirección a nivel organizacional."
            },
            impactNature: {
                R: "R. Repetitivo: Impacto rutinario y local; las acciones del puesto se circunscriben a su área inmediata sin afectar significativamente otros procesos.",
                C: "C. Circunstancial: Impacto ocasional o indirecto; las decisiones pueden influir en resultados puntuales pero no de forma permanente.",
                S: "S. Servicio: Impacto en calidad o continuidad de servicios internos; el puesto asegura que ciertos servicios clave funcionen correctamente.",
                P: "P. Primario: Impacto directo en resultados finales o en la línea de negocio principal; sus decisiones afectan indicadores estratégicos de la organización."
            },
            magnitude: {
                N: "No cuantificada: Impacto cualitativo o difícil de medir en números; el valor del impacto se aprecia en términos de calidad, satisfacción u otros.",
                1: "1. Muy pequeño: Área limitada o equipo reducido; el impacto se restringe a un pequeño grupo o función muy acotada.",
                2: "2. Pequeño: Área específica; el puesto influye en un departamento pequeño o una función de alcance limitado.",
                3: "3. Medio: Departamento/Unidad; el impacto abarca una unidad funcional completa o un departamento mediano de la empresa.",
                4: "4. Grande: Organización completa; las acciones del puesto pueden afectar a toda la organización o a sus resultados globales."
            }
        }
    },

    // Definición de niveles de puesto HAY (rango de puntajes totales)
    jobLevels: [
        { min: 0, max: 100, level: "Nivel 1", description: "Descripción del nivel 1." },
        { min: 101, max: 200, level: "Nivel 2", description: "Descripción del nivel 2." },
        { min: 201, max: 300, level: "Nivel 3", description: "Descripción del nivel 3." },
        { min: 301, max: 400, level: "Nivel 4", description: "Descripción del nivel 4." },
        { min: 401, max: 500, level: "Nivel 5", description: "Descripción del nivel 5." },
        { min: 501, max: 600, level: "Nivel 6", description: "Descripción del nivel 6." },
        { min: 601, max: 700, level: "Nivel 7", description: "Descripción del nivel 7." },
        { min: 701, max: 800, level: "Nivel 8", description: "Descripción del nivel 8." },
        { min: 801, max: 900, level: "Nivel 9", description: "Descripción del nivel 9." },
        { min: 901, max: 1000, level: "Nivel 10", description: "Descripción del nivel 10." },
        { min: 1001, max: 1100, level: "Nivel 11", description: "Descripción del nivel 11." },
        { min: 1101, max: 1200, level: "Nivel 12", description: "Descripción del nivel 12." },
        { min: 1201, max: 1300, level: "Nivel 13", description: "Descripción del nivel 13." },
        { min: 1301, max: 1400, level: "Nivel 14", description: "Descripción del nivel 14." },
        { min: 1401, max: 1500, level: "Nivel 15", description: "Descripción del nivel 15." },
        { min: 1501, max: 1600, level: "Nivel 16", description: "Descripción del nivel 16." },
        { min: 1601, max: 1700, level: "Nivel 17", description: "Descripción del nivel 17." },
        { min: 1701, max: 1800, level: "Nivel 18", description: "Descripción del nivel 18." },
        { min: 1801, max: 1900, level: "Nivel 19", description: "Descripción del nivel 19." },
        { min: 1901, max: 2000, level: "Nivel 20", description: "Descripción del nivel 20." },
        { min: 2001, max: 2100, level: "Nivel 21", description: "Descripción del nivel 21." },
        { min: 2101, max: 2200, level: "Nivel 22", description: "Descripción del nivel 22." },
        { min: 2201, max: 2300, level: "Nivel 23", description: "Descripción del nivel 23." },
        { min: 2301, max: 2400, level: "Nivel 24", description: "Descripción del nivel 24." },
        { min: 2401, max: 2500, level: "Nivel 25", description: "Descripción del nivel 25." }
    ],

    // Tipos de perfil corto según relación PS/AC (Problemas / Know-How)
    profileTypes: {
        "P4": { name: "Perfil Corto P4", description: "Predominio de Solución de Problemas (ratio PS/AC > 0.87)" },
        "P3": { name: "Perfil Corto P3", description: "Predominio de Solución de Problemas (ratio PS/AC > 0.76)" },
        "P2": { name: "Perfil Corto P2", description: "Predominio de Solución de Problemas (ratio PS/AC > 0.66)" },
        "P1": { name: "Perfil Corto P1", description: "Predominio de Solución de Problemas (ratio PS/AC > 0.57)" },
        "LEVEL": { name: "Perfil Balanceado", description: "Know-How y Problemas equilibrados (ratio entre 0.5 y 0.57)" },
        "A1": { name: "Perfil Corto A1", description: "Predominio de Know-How (ratio PS/AC > 0.43)" },
        "A2": { name: "Perfil Corto A2", description: "Predominio de Know-How (ratio PS/AC > 0.38)" },
        "A3": { name: "Perfil Corto A3", description: "Predominio de Know-How (ratio PS/AC > 0.33)" },
        "A4": { name: "Perfil Corto A4", description: "Predominio de Know-How (ratio PS/AC ≤ 0.33)" }
    }
};

// Variables globales para estado
window.currentEvaluation = null; // Última evaluación calculada (para PDF/guardado)
window.evaluationCharts = {
    levelDistribution: null,
    scoreDistribution: null
};
window.userSelections = {
    description: {},
    knowHow: {},
    problemSolving: {},
    responsibility: {}
};

// Función para mostrar notificaciones emergentes
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        ${message}
    `;
    const container = document.querySelector('.notification-container');
    if (container) {
        container.appendChild(notification);
        // Animación de salida luego de 3 segundos
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }
}

// Función para validar campos requeridos por sección (devuelve true/false)
function validateSection(sectionId) {
    const section = document.getElementById(sectionId);
    let isValid = true;
    // Obtener todos los campos con "required" dentro de la sección
    const requiredInputs = section.querySelectorAll('[required]');
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            // Campo vacío: marcar error visual
            input.classList.add('invalid-field');
            setTimeout(() => input.classList.remove('invalid-field'), 500);
            input.style.borderColor = 'var(--danger-color)';
            isValid = false;
            // Mostrar notificación de error indicando el campo faltante
            const label = input.previousElementSibling?.textContent || 'Campo';
            showNotification(`Por favor complete el campo: ${label}`, 'error');
        } else {
            // Campo lleno: restaurar estilo
            input.style.borderColor = '#ddd';
        }
    });
    return isValid;
}

// Función para cambiar de sección (paso del formulario)
function goToSection(sectionId) {
    // Ocultar todas las secciones de formulario
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
    });
    // Desactivar visualmente todos los pasos
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    // Mostrar la sección indicada
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
    // Marcar el paso correspondiente como activo
    const stepNumber = sectionId.split('-')[0]; // "1-section" -> "1"
    const step = document.querySelector(`.step[data-step="${stepNumber}"]`);
    if (step) {
        step.classList.add('active');
    }
    // Scroll hacia arriba suave para ver inicio de la sección
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función para cambiar entre contenidos principales (inicio, evaluaciones guardadas, reportes, configuración)
function showContent(contentId) {
    // Ocultar todos los bloques de contenido principales
    document.querySelectorAll('#evaluationContent, #evaluationsContent, #reportsContent, #settingsContent')
        .forEach(content => {
            content.classList.add('hidden-content');
        });
    // Mostrar el contenido solicitado
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.remove('hidden-content');
    }
    // Actualizar la selección activa en la barra lateral
    document.querySelectorAll('.nav-links li').forEach(li => {
        li.classList.remove('active');
    });
    const activeLink = document.querySelector(`#${contentId.replace('Content', 'Link')}`);
    if (activeLink) {
        activeLink.parentElement.classList.add('active');
    }
    // Si abrimos Evaluaciones Guardadas, cargamos la lista; si abrimos Reportes, cargamos gráficos
    if (contentId === 'evaluationsContent') {
        loadEvaluationsList();
    } else if (contentId === 'reportsContent') {
        loadReports();
    }
}

// Función para cargar la lista de evaluaciones guardadas desde localStorage
function loadEvaluationsList() {
    const evaluationsList = document.getElementById('evaluationsList');
    if (!evaluationsList) return;
    // Mostrar mensaje de carga
    evaluationsList.innerHTML = '<p>Cargando evaluaciones...</p>';
    setTimeout(() => {
        const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
        if (evaluations.length === 0) {
            evaluationsList.innerHTML = '<p>No hay evaluaciones guardadas.</p>';
            return;
        }
        // Limpiar lista e insertar cada evaluación como un elemento con acciones
        evaluationsList.innerHTML = '';
        evaluations.forEach(evaluation => {
            const evaluationItem = document.createElement('div');
            evaluationItem.className = 'evaluation-item';
            evaluationItem.innerHTML = `
                <div class="evaluation-info">
                    <h3>${evaluation.jobTitle}</h3>
                    <p>Nivel: ${evaluation.level.level} | Puntaje: ${evaluation.scores.total} | Fecha: ${new Date(evaluation.evaluationDate).toLocaleDateString()}</p>
                </div>
                <div class="evaluation-actions">
                    <button class="btn btn-secondary view-evaluation" data-id="${evaluation.id}">
                        <i class="fas fa-eye"></i> Ver
                    </button>
                    <button class="btn btn-secondary export-evaluation" data-id="${evaluation.id}">
                        <i class="fas fa-download"></i> Exportar
                    </button>
                    <button class="btn btn-secondary delete-evaluation" data-id="${evaluation.id}">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </div>
            `;
            evaluationsList.appendChild(evaluationItem);
        });
        // Eventos para los botones de cada evaluación listada
        document.querySelectorAll('.view-evaluation').forEach(button => {
            button.addEventListener('click', function() {
                const evaluationId = parseInt(this.getAttribute('data-id'));
                viewEvaluation(evaluationId);
            });
        });
        document.querySelectorAll('.export-evaluation').forEach(button => {
            button.addEventListener('click', function() {
                const evaluationId = parseInt(this.getAttribute('data-id'));
                exportSavedEvaluation(evaluationId);
            });
        });
        document.querySelectorAll('.delete-evaluation').forEach(button => {
            button.addEventListener('click', function() {
                const evaluationId = parseInt(this.getAttribute('data-id'));
                deleteEvaluation(evaluationId);
            });
        });
    }, 500);
}

// Función para eliminar una evaluación guardada
function deleteEvaluation(id) {
    if (confirm('¿Está seguro que desea eliminar esta evaluación?')) {
        let evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
        evaluations = evaluations.filter(e => e.id !== id);
        localStorage.setItem('jobEvaluations', JSON.stringify(evaluations));
        showNotification('Evaluación eliminada correctamente', 'success');
        loadEvaluationsList(); // recargar la lista
    }
}

// Función para ver/abrir una evaluación guardada en la interfaz de resultados
function viewEvaluation(id) {
    const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
    const evaluation = evaluations.find(e => e.id === id);
    if (!evaluation) {
        showNotification('No se encontró la evaluación', 'error');
        return;
    }
    // Mostrar la sección de evaluación y el paso de resultados
    showContent('evaluationContent');
    goToSection('5-section');
    // Cargar datos en la sección de resultados
    document.getElementById('totalScore').textContent = evaluation.scores.total;
    document.getElementById('jobLevel').textContent = evaluation.level.level;
    document.getElementById('levelDescription').textContent = evaluation.level.description;
    document.getElementById('jobDescriptionResult').textContent = evaluation.jobTitle;
    // Animar círculo de puntaje total
    animateProgressCircle(evaluation.scores.total);
    // Mostrar puntajes individuales
    document.getElementById('knowHowScore').textContent = `${evaluation.scores.knowHow} pts`;
    document.getElementById('problemSolvingScore').textContent = `${evaluation.scores.problemSolving} pts`;
    document.getElementById('responsibilityScore').textContent = `${evaluation.scores.responsibility} pts`;
    // Mostrar perfil corto
    const profileType = determineProfileType(evaluation.scores.knowHow, evaluation.scores.problemSolving);
    const profileInfo = evaluationData.profileTypes[profileType];
    document.getElementById('profileType').textContent = profileInfo.name;
    document.getElementById('profileDescription').textContent = profileInfo.description;
    // Animar barras de progreso individuales
    animateProgressBars({
        knowHow: evaluation.scores.knowHow,
        problemSolving: evaluation.scores.problemSolving,
        responsibility: evaluation.scores.responsibility
    });
    // Guardar la evaluación actual en variable global para posibles exportaciones o PDF
    window.currentEvaluation = evaluation;
}

// Función para determinar el Perfil Corto según ratio PS/AC
function determineProfileType(knowHowScore, problemSolvingScore) {
    const ratio = problemSolvingScore / knowHowScore;
    if (ratio > 0.87) return "P4";
    if (ratio > 0.76) return "P3";
    if (ratio > 0.66) return "P2";
    if (ratio > 0.57) return "P1";
    if (ratio >= 0.5 && ratio <= 0.57) return "LEVEL";
    if (ratio > 0.43) return "A1";
    if (ratio > 0.38) return "A2";
    if (ratio > 0.33) return "A3";
    return "A4";
}

// Función para cargar gráficos de reportes (distribución de niveles y puntajes)
function loadReports() {
    const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
    if (!evaluations.length) {
        // Si no hay evaluaciones, limpiar/mostrar mensaje (podría implementarse)
    }
    // Calcular distribución de niveles
    const levelCounts = {};
    evaluationData.jobLevels.forEach(level => {
        levelCounts[level.level] = evaluations.filter(e => e.scores.total >= level.min && e.scores.total <= level.max).length;
    });
    // Calcular distribución de puntajes totales
    const scores = evaluations.map(e => e.scores.total);
    // Crear gráficos usando Chart.js (si no existen o actualizarlos)
    if (window.evaluationCharts.levelDistribution) {
        window.evaluationCharts.levelDistribution.data.datasets[0].data = Object.values(levelCounts);
        window.evaluationCharts.levelDistribution.update();
    } else {
        window.evaluationCharts.levelDistribution = createLevelDistributionChart(levelCounts);
    }
    if (window.evaluationCharts.scoreDistribution) {
        window.evaluationCharts.scoreDistribution.data.datasets[0].data = scores;
        window.evaluationCharts.scoreDistribution.update();
    } else {
        window.evaluationCharts.scoreDistribution = createScoreDistributionChart(scores);
    }
}

// Función para crear gráfico de distribución de niveles (Chart.js tipo pie o bar)
function createLevelDistributionChart(levelCounts) {
    const ctx = document.getElementById('levelDistributionChart').getContext('2d');
    return new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(levelCounts),
            datasets: [{
                data: Object.values(levelCounts),
                backgroundColor: ['#4361ee', '#4895ef', '#4cc9f0', '#f72585', '#7209b7', '#3f37c9', '#4895ef', '#4cc9f0'], // colores ejemplo
            }]
        },
        options: {
            plugins: {
                title: { display: true, text: 'Distribución de Niveles' },
                legend: { position: 'bottom' }
            }
        }
    });
}

// Función para crear gráfico de distribución de puntajes (Chart.js tipo histogram)
function createScoreDistributionChart(scores) {
    const ctx = document.getElementById('scoreDistributionChart').getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: scores.map((_, i) => i + 1), // índices como etiqueta
            datasets: [{
                label: 'Puntaje Total',
                data: scores,
                backgroundColor: '#4361ee'
            }]
        },
        options: {
            plugins: {
                title: { display: true, text: 'Puntajes Totales de Evaluaciones' }
            },
            scales: {
                x: { display: false }, // puede ajustarse para grupos
                y: { beginAtZero: true }
            }
        }
    });
}

// Función para calcular el puntaje de Know-How
function calculateKnowHowScore() {
    const technicalLevel = document.getElementById('technicalCompetence').value;
    const communicationLevel = document.getElementById('communicationLevel').value;
    const integrationScope = document.getElementById('integrationScope').value;
    if (!technicalLevel || !communicationLevel || !integrationScope) {
        showNotification('Por favor complete todos los campos de Know-How', 'error');
        return null;
    }
    // Obtener índices correspondientes
    const commIndex = evaluationData.knowHow.communication[communicationLevel];
    const intIndex = evaluationData.knowHow.integration[integrationScope];
    const techScores = evaluationData.knowHow.technical[technicalLevel];
    // Sumar índices de comunicación e integración
    const totalIndex = commIndex + intIndex;
    // Asegurar que el índice no exceda el tamaño del array de puntajes técnicos
    const adjustedIndex = Math.min(totalIndex, techScores.length - 1);
    return techScores[adjustedIndex];
}

// Función para calcular el puntaje de Solución de Problemas (usa el score de Know-How)
function calculateProblemSolvingScore(knowHowScore) {
    const complexityLevel = document.getElementById('problemComplexity').value;
    const thinkingFreedom = document.getElementById('thinkingFreedom').value;
    if (!complexityLevel || !thinkingFreedom || !knowHowScore) {
        showNotification('Por favor complete todos los campos de Solución de Problemas', 'error');
        return null;
    }
    const complexityFactors = evaluationData.problemSolving.complexity[complexityLevel];
    const freedomIndex = evaluationData.problemSolving.thinkingFreedom[thinkingFreedom];
    const adjustedIndex = Math.min(freedomIndex, complexityFactors.length - 1);
    const percentage = complexityFactors[adjustedIndex];
    // El puntaje de Solución de Problemas es el de Know-How multiplicado por el factor correspondiente
    return Math.round(knowHowScore * percentage);
}

// Función para calcular el puntaje de Responsabilidad
function calculateResponsibilityScore() {
    const freedomLevel = document.getElementById('actionFreedom').value;
    const impactNature = document.getElementById('impactNature').value;
    const magnitude = document.getElementById('impactMagnitude').value;
    if (!freedomLevel || !impactNature || !magnitude) {
        showNotification('Por favor complete todos los campos de Responsabilidad', 'error');
        return null;
    }
    const freedomScores = evaluationData.responsibility.freedom[freedomLevel];
    const natureIndex = evaluationData.responsibility.impactNature[impactNature];
    const magnitudeIndex = evaluationData.responsibility.magnitude[magnitude];
    // Sumar índices de naturaleza + magnitud para posicionar en array de libertad (máx índice = 14)
    const totalIndex = natureIndex + magnitudeIndex;
    const adjustedIndex = Math.min(totalIndex, freedomScores.length - 1);
    return freedomScores[adjustedIndex];
}

// Función para determinar el nivel HAY del puesto a partir del puntaje total
function determineJobLevel(totalScore) {
    for (const level of evaluationData.jobLevels) {
        if (totalScore >= level.min && totalScore <= level.max) {
            return level;
        }
    }
    return {
        level: "No determinado",
        description: "El puntaje calculado está fuera de los rangos predefinidos"
    };
}

// Función para animar el círculo de progreso (puntaje total)
function animateProgressCircle(score) {
    const circle = document.querySelector('.progress-ring-circle');
    if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        // Se asume puntaje máximo 1600 (ej: Nivel H => 1056 + Resp H max 2200 ~ 1600 promedio)
        const offset = circumference - (score / 1600) * circumference;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);
    }
}

// Función para animar el conteo numérico (incrementa número hasta el valor objetivo)
function animateNumberCounter(elementId, target) {
    const element = document.getElementById(elementId);
    if (element) {
        let current = 0;
        const duration = 1500; // 1.5 segundos
        const increment = target / (duration / 16); // incremento por frame (~60fps)
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            element.textContent = Math.floor(current);
        }, 16);
    }
}

// Función para animar las barras de progreso individuales
function animateProgressBars(scores) {
    const bars = [
        { id: 'knowhow-bar', value: scores.knowHow / 1056 * 100 },
        { id: 'problemsolving-bar', value: scores.problemSolving / 1056 * 100 },
        { id: 'responsibility-bar', value: scores.responsibility / 1600 * 100 }
    ];
    bars.forEach((bar, index) => {
        setTimeout(() => {
            const barElement = document.getElementById(bar.id);
            if (barElement) {
                barElement.style.width = `${bar.value}%`;
            }
        }, 300 * (index + 1));
    });
}

// Función para construir contenido CSV de evaluaciones (todas)
function saveEvaluationsToCSV(evaluations) {
    const headers = [
        'ID', 'Título del Puesto', 'Descripción', 'Responsabilidades',
        'Fecha de Evaluación', 'Puntaje Total', 'Nivel', 'Perfil Corto',
        'Know-How', 'Solución de Problemas', 'Responsabilidad'
    ];
    const rows = evaluations.map(evaluation => {
        const profileType = determineProfileType(evaluation.scores.knowHow, evaluation.scores.problemSolving);
        const profileInfo = evaluationData.profileTypes[profileType];
        return [
            evaluation.id,
            `"${evaluation.jobTitle.replace(/"/g, '""')}"`,
            `"${(evaluation.jobDescription || '').replace(/"/g, '""')}"`,
            `"${(evaluation.jobResponsibilities || '').replace(/"/g, '""')}"`,
            new Date(evaluation.evaluationDate).toISOString(),
            evaluation.scores.total,
            `"${evaluation.level.level.replace(/"/g, '""')}"`,
            `"${profileInfo.name.replace(/"/g, '""')}"`,
            evaluation.scores.knowHow,
            evaluation.scores.problemSolving,
            evaluation.scores.responsibility
        ];
    });
    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n');
    return csvContent;
}

// Función para desencadenar descarga de CSV dado su contenido
function downloadCSV(content, filename) {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 100);
}

// Función para guardar todas las evaluaciones locales a un CSV en disco
function saveEvaluationsToLocalCSV() {
    const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
    if (evaluations.length === 0) {
        showNotification('No hay evaluaciones para guardar', 'warning');
        return;
    }
    const csvContent = saveEvaluationsToCSV(evaluations);
    const filename = `evaluaciones_${new Date().toISOString().slice(0,10)}.csv`;
    downloadCSV(csvContent, filename);
    showNotification('Evaluaciones guardadas en archivo CSV', 'success');
}

// Función mejorada para guardar en LocalStorage una evaluación (recibe objeto evaluación actual)
function saveEvaluationToLocal(data) {
    try {
        let evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
        // Calcular perfil corto para almacenarlo también
        const profileType = determineProfileType(data.scores.knowHow, data.scores.problemSolving);
        const profileInfo = evaluationData.profileTypes[profileType];
        // Crear objeto de evaluación con meta campos adicionales
        const evaluationWithMeta = {
            ...data,
            id: Date.now(), // usar timestamp como ID único
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            profileType: profileType,
            profileName: profileInfo.name
        };
        evaluations.push(evaluationWithMeta);
        localStorage.setItem('jobEvaluations', JSON.stringify(evaluations));
        return { success: true, id: evaluationWithMeta.id };
    } catch (error) {
        console.error('Error al guardar en LocalStorage:', error);
        return { success: false, error: error.message };
    }
}

// Función para exportar (descargar) una evaluación guardada específica (como JSON por defecto)
function exportSavedEvaluation(id) {
    const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
    const evaluation = evaluations.find(e => e.id === id);
    if (!evaluation) {
        showNotification('No se encontró la evaluación', 'error');
        return;
    }
    exportEvaluation(evaluation);
}

// Función mejorada para exportar una evaluación actual (JSON o CSV)
function exportEvaluation(data, format = 'json') {
    try {
        let content, mimeType, extension;
        if (format === 'json') {
            content = JSON.stringify(data, null, 2);
            mimeType = 'application/json';
            extension = 'json';
        } else if (format === 'csv') {
            // Armar CSV simple con pares campo-valor
            const headers = ['Campo', 'Valor'];
            const profileType = determineProfileType(data.scores.knowHow, data.scores.problemSolving);
            const profileInfo = evaluationData.profileTypes[profileType];
            const rows = [
                ['Puesto', data.jobTitle],
                ['Descripción', data.jobDescription],
                ['Responsabilidades', data.jobResponsibilities],
                ['Puntaje Total', data.scores.total],
                ['Nivel', data.level.level],
                ['Perfil Corto', profileInfo.name],
                ['Know-How', data.scores.knowHow],
                ['Solución Problemas', data.scores.problemSolving],
                ['Responsabilidad', data.scores.responsibility],
                ['Fecha Evaluación', new Date(data.evaluationDate).toLocaleDateString()]
            ];
            content = [headers, ...rows].map(row =>
                row.map(field => `"${field.toString().replace(/"/g, '""')}"`).join(',')
            ).join('\n');
            mimeType = 'text/csv';
            extension = 'csv';
        }
        // Descargar el archivo generado
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `evaluacion_${data.jobTitle.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0,10)}.${extension}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 100);
        return true;
    } catch (error) {
        console.error('Error al exportar evaluación:', error);
        showNotification('Error al exportar la evaluación', 'error');
        return false;
    }
}

// Función para mostrar el diálogo de opciones de guardado (LocalStorage/CSV/JSON)
function showSaveOptionsDialog() {
    const dialog = document.createElement('div');
    dialog.className = 'save-dialog';
    dialog.innerHTML = `
        <div class="dialog-content">
            <h3>Guardar Evaluación</h3>
            <p>Seleccione cómo desea guardar la evaluación:</p>
            <div class="options">
                <button class="btn btn-option" id="saveLocalBtn">
                    <i class="fas fa-save"></i> Guardar en LocalStorage
                </button>
                <button class="btn btn-option" id="saveCSVBtn">
                    <i class="fas fa-file-csv"></i> Exportar a CSV
                </button>
                <button class="btn btn-option" id="saveJSONBtn">
                    <i class="fas fa-file-code"></i> Exportar a JSON
                </button>
            </div>
            <button class="btn btn-cancel" id="cancelSaveBtn">Cancelar</button>
        </div>
    `;
    document.body.appendChild(dialog);
    // Event listeners para botones del diálogo
    document.getElementById('saveLocalBtn')?.addEventListener('click', () => {
        const result = saveEvaluationToLocal(window.currentEvaluation);
        handleSaveResult(result, 'local');
        dialog.remove();
    });
    document.getElementById('saveCSVBtn')?.addEventListener('click', () => {
        exportEvaluation(window.currentEvaluation, 'csv');
        dialog.remove();
    });
    document.getElementById('saveJSONBtn')?.addEventListener('click', () => {
        exportEvaluation(window.currentEvaluation, 'json');
        dialog.remove();
    });
    document.getElementById('cancelSaveBtn')?.addEventListener('click', () => {
        dialog.remove();
    });
}

// Función para generar el PDF completo de la evaluación actual
function generatePDF() {
    if (!window.currentEvaluation) {
        showNotification('No hay evaluación para generar PDF', 'error');
        return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const evalData = window.currentEvaluation;
    const profileType = determineProfileType(evalData.scores.knowHow, evalData.scores.problemSolving);
    const profileInfo = evaluationData.profileTypes[profileType];
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const centerX = pageWidth / 2;
    // --- CONFIGURACIÓN INICIAL ---
    doc.setFont('helvetica', 'normal');
    // --- PORTADA ---
    doc.setFontSize(24);
    doc.setTextColor(40, 53, 147);
    doc.text('Evaluación de Puesto', centerX, 30, { align: 'center' });
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(`Puesto: ${evalData.jobTitle}`, margin, 50);
    doc.text(`Fecha: ${new Date(evalData.evaluationDate).toLocaleDateString()}`, margin, 60);
    // Gráfico radial (simplificado para PDF) – puntos de Know-How, Problemas, Responsabilidad
    const maxScore = 1056;
    const scores = [
        { label: 'Know-How', value: evalData.scores.knowHow, color: [67, 97, 238] },
        { label: 'Solución Problemas', value: evalData.scores.problemSolving, color: [244, 63, 94] },
        { label: 'Responsabilidad', value: evalData.scores.responsibility, color: [16, 185, 129] }
    ];
    const radarRadius = 30;
    const radarX = centerX;
    const radarY = 100;
    // Dibujar ejes del gráfico radial (3 círculos concéntricos)
    doc.setDrawColor(200, 200, 200);
    for (let i = 0; i < 3; i++) {
        doc.circle(radarX, radarY, radarRadius * (i + 1) / 3, 'D');
    }
    // Dibujar puntos de datos en el gráfico radial
    scores.forEach((score, i) => {
        const angle = (i * (2 * Math.PI / scores.length)) - Math.PI / 2;
        const scoreRadius = (score.value / maxScore) * radarRadius;
        const x = radarX + scoreRadius * Math.cos(angle);
        const y = radarY + scoreRadius * Math.sin(angle);
        doc.setFillColor(score.color[0], score.color[1], score.color[2], 100);
        doc.circle(x, y, 3, 'F');
        // Conectar punto al centro
        if (i === 0) doc.moveTo(radarX, radarY);
        doc.lineTo(x, y);
        doc.stroke();
    });
    // Leyenda del gráfico
    doc.setFontSize(10);
    let legendY = radarY + radarRadius + 20;
    scores.forEach(score => {
        doc.setFillColor(score.color[0], score.color[1], score.color[2]);
        doc.rect(margin, legendY - 3, 5, 5, 'F');
        doc.text(`${score.label}: ${score.value} pts`, margin + 10, legendY);
        legendY += 10;
    });
    // --- DETALLES DEL PUESTO ---
    doc.addPage();
    doc.setFontSize(18);
    doc.setTextColor(40, 53, 147);
    doc.text('Descripción del Puesto', margin, 20);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const jobDescLines = doc.splitTextToSize(evalData.jobDescription || 'No especificado', pageWidth - 2 * margin);
    doc.text(jobDescLines, margin, 30);
    doc.setFontSize(14);
    doc.text('Responsabilidades:', margin, 50);
    doc.setFontSize(12);
    const responsibilitiesLines = doc.splitTextToSize(evalData.jobResponsibilities || 'No especificado', pageWidth - 2 * margin);
    doc.text(responsibilitiesLines, margin, 60);
    // --- TABLA DE PUNTAJES (Know-How, Sol. Problemas, Responsabilidad) ---
    doc.addPage();
    doc.setFontSize(18);
    doc.setTextColor(40, 53, 147);
    doc.text('Detalle de Puntajes', margin, 20);
    // Tabla de Know-How
    const techLevel = document.getElementById('technicalCompetence').value;
    const commLevel = document.getElementById('communicationLevel').value;
    const intLevel = document.getElementById('integrationScope').value;
    doc.autoTable({
        startY: 30,
        head: [['Know-How', 'Selección', 'Puntaje']],
        body: [
            ['Competencia Técnica', techLevel, evalData.scores.knowHow],
            ['Nivel Comunicación', commLevel, ''],
            ['Ámbito Integración', intLevel, '']
        ],
        headStyles: { fillColor: [40, 53, 147], textColor: [255, 255, 255] }
    });
    // Tabla de Solución de Problemas
    const compLevel = document.getElementById('problemComplexity').value;
    const thinkLevel = document.getElementById('thinkingFreedom').value;
    doc.autoTable({
        startY: doc.previousAutoTable.finalY + 20,
        head: [['Solución de Problemas', 'Selección', 'Puntaje']],
        body: [
            ['Complejidad', compLevel, evalData.scores.problemSolving],
            ['Libertad Pensamiento', thinkLevel, '']
        ],
        headStyles: { fillColor: [40, 53, 147], textColor: [255, 255, 255] }
    });
    // Tabla de Responsabilidad
    const actionLevel = document.getElementById('actionFreedom').value;
    const impactNature = document.getElementById('impactNature').value;
    const impactMagnitude = document.getElementById('impactMagnitude').value;
    doc.autoTable({
        startY: doc.previousAutoTable.finalY + 20,
        head: [['Responsabilidad', 'Selección', 'Puntaje']],
        body: [
            ['Libertad para Actuar', actionLevel, evalData.scores.responsibility],
            ['Naturaleza Impacto', impactNature, ''],
            ['Magnitud Impacto', impactMagnitude, '']
        ],
        headStyles: { fillColor: [40, 53, 147], textColor: [255, 255, 255] }
    });
    // --- DESCRIPCIONES DE LAS SELECCIONES (por factor) ---
    doc.addPage();
    doc.setFontSize(18);
    doc.setTextColor(40, 53, 147);
    doc.text('Explicación de Criterios', margin, 20);
    // Know-How
    doc.setFontSize(14);
    doc.text('1. Know-How', margin, 30);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Competencia Técnica:', margin, 40);
    doc.setFont('helvetica', 'normal');
    const techDesc = evaluationData.knowHow.descriptions.technical[techLevel];
    doc.text(doc.splitTextToSize(techDesc, pageWidth - 2 * margin), margin, 50);
    doc.setFont('helvetica', 'bold');
    doc.text('Nivel de Comunicación:', margin, 80);
    doc.setFont('helvetica', 'normal');
    const commDesc = evaluationData.knowHow.descriptions.communication[commLevel];
    doc.text(doc.splitTextToSize(commDesc, pageWidth - 2 * margin), margin, 90);
    doc.setFont('helvetica', 'bold');
    doc.text('Ámbito de Integración:', margin, 120);
    doc.setFont('helvetica', 'normal');
    const intDesc = evaluationData.knowHow.descriptions.integration[intLevel];
    doc.text(doc.splitTextToSize(intDesc, pageWidth - 2 * margin), margin, 130);
    // Solución de Problemas
    doc.addPage();
    doc.setFontSize(14);
    doc.text('2. Solución de Problemas', margin, 20);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Complejidad de las Situaciones:', margin, 30);
    doc.setFont('helvetica', 'normal');
    const compDesc = evaluationData.problemSolving.descriptions.complexity[compLevel];
    doc.text(doc.splitTextToSize(compDesc, pageWidth - 2 * margin), margin, 40);
    doc.setFont('helvetica', 'bold');
    doc.text('Marco de Referencia - Libertad de Pensar:', margin, 70);
    doc.setFont('helvetica', 'normal');
    const thinkDesc = evaluationData.problemSolving.descriptions.thinkingFreedom[thinkLevel];
    doc.text(doc.splitTextToSize(thinkDesc, pageWidth - 2 * margin), margin, 80);
    // Responsabilidad
    doc.addPage();
    doc.setFontSize(14);
    doc.text('3. Responsabilidad', margin, 20);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Libertad para Actuar:', margin, 30);
    doc.setFont('helvetica', 'normal');
    const actionDesc = evaluationData.responsibility.descriptions.freedom[actionLevel];
    doc.text(doc.splitTextToSize(actionDesc, pageWidth - 2 * margin), margin, 40);
    doc.setFont('helvetica', 'bold');
    doc.text('Naturaleza del Impacto:', margin, 70);
    doc.setFont('helvetica', 'normal');
    const natureDesc = evaluationData.responsibility.descriptions.impactNature[impactNature];
    doc.text(doc.splitTextToSize(natureDesc, pageWidth - 2 * margin), margin, 80);
    doc.setFont('helvetica', 'bold');
    doc.text('Magnitud del Impacto:', margin, 110);
    doc.setFont('helvetica', 'normal');
    const magnitudeDesc = evaluationData.responsibility.descriptions.magnitude[impactMagnitude];
    doc.text(doc.splitTextToSize(magnitudeDesc, pageWidth - 2 * margin), margin, 120);
    // --- RESUMEN FINAL ---
    doc.addPage();
    doc.setFontSize(18);
    doc.setTextColor(40, 53, 147);
    doc.text('Resumen de Evaluación', margin, 20);
    doc.setFontSize(14);
    doc.text(`Puesto: ${evalData.jobTitle}`, margin, 35);
    doc.text(`Fecha: ${new Date(evalData.evaluationDate).toLocaleDateString()}`, margin, 45);
    doc.setFontSize(12);
    doc.text(`Puntaje Total: ${evalData.scores.total}`, margin, 60);
    doc.text(`Nivel: ${evalData.level.level}`, margin, 70);
    doc.text(`Perfil: ${profileInfo.name}`, margin, 80);
    doc.text('Descripción del Nivel:', margin, 95);
    doc.text(doc.splitTextToSize(evalData.level.description, pageWidth - 2 * margin), margin, 105);
    // Guardar PDF con nombre dinámico
    doc.save(`Evaluacion_Completa_${evalData.jobTitle.replace(/\s+/g, '_')}.pdf`);
    showNotification('PDF generado correctamente', 'success');
}

// Manejo del resultado de guardado (notificaciones)
function handleSaveResult(result, type) {
    if (result.success) {
        const message = type === 'local'
            ? 'Evaluación guardada localmente'
            : 'Evaluación guardada en CSV';
        showNotification(message, 'success');
        // Si estamos viendo la lista de evaluaciones en este momento, recargarla
        if (document.getElementById('evaluationsContent') && !document.getElementById('evaluationsContent').classList.contains('hidden-content')) {
            loadEvaluationsList();
        }
    } else {
        showNotification(`Error al guardar ${type === 'local' ? 'localmente' : 'en CSV'}: ${result.error}`, 'error');
    }
}

// Función principal para procesar la evaluación del puesto
function evaluateJob() {
    // Validar campos requeridos del paso Descripción
    const jobTitle = document.getElementById('jobTitle').value;
    if (!jobTitle) {
        showNotification('Por favor ingrese el nombre del puesto', 'error');
        return;
    }
    // Calcular puntajes de cada sección (si alguna devuelve null, cancelar)
    const knowHowScore = calculateKnowHowScore();
    if (knowHowScore === null) return;
    const problemSolvingScore = calculateProblemSolvingScore(knowHowScore);
    if (problemSolvingScore === null) return;
    const responsibilityScore = calculateResponsibilityScore();
    if (responsibilityScore === null) return;
    // Sumar puntajes y determinar nivel y perfil
    const totalScore = knowHowScore + problemSolvingScore + responsibilityScore;
    const jobLevel = determineJobLevel(totalScore);
    const profileType = determineProfileType(knowHowScore, problemSolvingScore);
    const profileInfo = evaluationData.profileTypes[profileType];
    // Mostrar resultados en la interfaz
    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('jobLevel').textContent = jobLevel.level;
    document.getElementById('levelDescription').textContent = jobLevel.description;
    document.getElementById('jobDescriptionResult').textContent = jobTitle;
    document.getElementById('profileType').textContent = profileInfo.name;
    document.getElementById('profileDescription').textContent = profileInfo.description;
    document.getElementById('knowHowScore').textContent = `${knowHowScore} pts`;
    document.getElementById('problemSolvingScore').textContent = `${problemSolvingScore} pts`;
    document.getElementById('responsibilityScore').textContent = `${responsibilityScore} pts`;
    // Animaciones de resultado
    animateProgressCircle(totalScore);
    animateNumberCounter('totalScore', totalScore);
    animateProgressBars({
        knowHow: knowHowScore,
        problemSolving: problemSolvingScore,
        responsibility: responsibilityScore
    });
    // Guardar evaluación actual en variable global (para exportar o PDF)
    window.currentEvaluation = {
        jobTitle: jobTitle,
        jobDescription: document.getElementById('jobDescription').value,
        jobResponsibilities: document.getElementById('jobResponsibilities').value,
        evaluationDate: new Date().toISOString(),
        scores: {
            knowHow: knowHowScore,
            problemSolving: problemSolvingScore,
            responsibility: responsibilityScore,
            total: totalScore
        },
        level: jobLevel,
        profileType: profileType,
        profileName: profileInfo.name
    };
    // Ir a la sección de Resultados
    goToSection('5-section');
}

// Función para resetear la evaluación (limpia el formulario para iniciar una nueva evaluación)
function resetEvaluation() {
    window.currentEvaluation = null;
    // Limpiar campos de texto
    document.getElementById('jobTitle').value = '';
    document.getElementById('jobDescription').value = '';
    document.getElementById('jobResponsibilities').value = '';
    // Reiniciar selects al valor inicial
    document.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });
    // Restablecer visualización de puntajes y textos en resultados
    document.getElementById('totalScore').textContent = '0';
    document.getElementById('jobLevel').textContent = 'Nivel 0';
    document.getElementById('levelDescription').textContent = '';
    document.getElementById('jobDescriptionResult').textContent = '';
    document.getElementById('knowHowScore').textContent = '0 pts';
    document.getElementById('problemSolvingScore').textContent = '0 pts';
    document.getElementById('responsibilityScore').textContent = '0 pts';
    document.getElementById('profileType').textContent = 'Perfil no determinado';
    document.getElementById('profileDescription').textContent = 'No se ha determinado el perfil corto';
    // Resetear barras de progreso y círculo
    document.querySelectorAll('.progress-fill').forEach(bar => {
        bar.style.width = '0%';
    });
    const circle = document.querySelector('.progress-ring-circle');
    if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
    }
    // Volver al primer paso del formulario
    goToSection('1-section');
}

// Al cargar DOM, configurar eventos
document.addEventListener('DOMContentLoaded', function() {
    // Ocultar preloader tras breve pausa
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 1000);

    // Navegación lateral (secciones principales)
    document.getElementById('homeLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('evaluationContent');
    });
    document.getElementById('evaluationsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('evaluationsContent');
    });
    document.getElementById('reportsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('reportsContent');
    });
    document.getElementById('settingsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('settingsContent');
    });

    // Permitir clic en los círculos de pasos para navegar directamente (opcional)
    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('click', function() {
            const stepNumber = this.getAttribute('data-step');
            goToSection(`${stepNumber}-section`);
        });
    });

    // Botones Siguiente/Anterior con validación de secciones
    document.getElementById('nextToKnowHow')?.addEventListener('click', (e) => {
        if (!validateSection('1-section')) {
            e.preventDefault();
            return;
        }
        goToSection('2-section');
    });
    document.getElementById('backToDescription')?.addEventListener('click', () => goToSection('1-section'));
    document.getElementById('nextToProblemSolving')?.addEventListener('click', (e) => {
        if (!validateSection('2-section')) {
            e.preventDefault();
            return;
        }
        goToSection('3-section');
    });
    document.getElementById('backToKnowHow')?.addEventListener('click', () => goToSection('2-section'));
    document.getElementById('nextToResponsibility')?.addEventListener('click', (e) => {
        if (!validateSection('3-section')) {
            e.preventDefault();
            return;
        }
        goToSection('4-section');
    });
    document.getElementById('backToProblemSolving')?.addEventListener('click', () => goToSection('3-section'));

    // Botón Evaluar Puesto (calcula resultados)
    document.getElementById('evaluateBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        evaluateJob();
    });

    // Botón Guardar Evaluación - abre diálogo de opciones (solo si hay evaluación)
    document.getElementById('saveBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.currentEvaluation) {
            showSaveOptionsDialog();
        } else {
            showNotification('No hay evaluación para guardar', 'error');
        }
    });

    // Botón Exportar (descarga evaluación actual en JSON directamente)
    document.getElementById('exportBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.currentEvaluation) {
            exportEvaluation(window.currentEvaluation, 'json');
        } else {
            showNotification('No hay evaluación para exportar', 'error');
        }
    });

    // Botón Generar PDF
    document.getElementById('generatePdfBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        generatePDF();
    });

    // Botones Nueva Evaluación (en cabecera y en resultados) - resetean formulario
    document.getElementById('newEvalBtn')?.addEventListener('click', resetEvaluation);
    document.getElementById('newEvaluationBtn')?.addEventListener('click', resetEvaluation);

    // (Opcional) Botón para exportar todas las evaluaciones guardadas a CSV (si se implementara en UI)
    document.getElementById('exportAllBtn')?.addEventListener('click', saveEvaluationsToLocalCSV);

    // Mostrar la pantalla inicial por defecto
    showContent('evaluationContent');
    goToSection('1-section');
});
