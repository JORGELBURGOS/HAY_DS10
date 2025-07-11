// Datos de evaluación
const evaluationData = {
    knowHow: {
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
        descriptions: {
            technical: {
                A: "BÁSICO: Nociones aritméticas, lectura y escritura elemental. Conocimiento de instrucciones y rutinas simples adquirido a través de breves explicaciones.",
                B: "INTRODUCTORIO: Conocimiento de rutinas de trabajo y métodos estandarizados; conocimiento de datos e información general; manejo de equipos y maquinaria sencilla. El conocimiento se adquiere generalmente por medio de entrenamiento práctico en el trabajo.",
                C: "GENERAL/PROCESO/PROCEDIMIENTO: Conocimientos para la aplicación de métodos y técnicas practicas; procedimientos y procesos de trabajo; habilidad para la operación con materiales, equipos y herramientas especializadas. El conocimiento generalmente se adquiere a través de formación especializada.",
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
        complexity: {
            1: [0.1, 0.12, 0.14, 0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76],
            2: [0.12, 0.14, 0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87],
            3: [0.14, 0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87, 1.0],
            4: [0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87, 1.0, 1.15],
            5: [0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87, 1.0, 1.15, 1.32]
        },
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
        descriptions: {
            complexity: {
                1: "1. Repetitivo: Situaciones idénticas cuya solución requiere una simple elección entre cosas aprendidas.",
                2: "2. Con modelos: Situaciones similares cuya solución requiere una elección crítica entre alternativas conocidas.",
                3: "3. Variable: Situaciones diferentes que requieren la identificación de patrones, la aplicación de juicios y la selección de una solución dentro del área de conocimiento profesional y del conocimiento adquirido.",
                4: "4. Adaptación: Las situaciones requieren constantemente de la adaptación o del desarrollo de nuevas soluciones a través de un pensamiento analítico, de la evaluación, la interpretación la creatividad y la innovación.",
                5: "5. Sin precedentes: Situaciones novedosas e inexploradas que requieren el desarrollo de nuevos conceptos y de soluciones imaginativas para las que no existen precedentes."
            },
            thinkingFreedom: {
                A: "A. RUTINA ESTRICTA: Actuación dentro de unas instrucciones muy detalladas y precisas. Existencia de un supervisor permanente.",
                B: "B. RUTINA: Actuación dentro de prácticas e instrucciones detalladas y estandarizadas. Soporte y ejemplos disponibles de manera inmediata.",
                C: "C. SEMI-RUTINA: Actuación dentro de procedimientos pre-definidos, diversificados. Gran cantidad de precedentes cubren la mayoría de las situaciones. Soporte fácilmente disponible.",
                D: "D. ESTANDARIZADO: Actuación dentro de procedimientos, estándares y precedentes múltiples y sustancialmente diferentes. Soporte en caso necesario.",
                E: "E. DEFINICIÓN CLARA: Actuación dentro de políticas, principios y objetivos específicos claramente definidos.",
                F: "F. DEFINICIÓN AMPLIA: Actuación dentro de políticas y objetivos definidos de manera amplia.",
                G: "G. DEFINICIÓN GENÉRICA: Actuación dentro de políticas generales, principios y metas de la organización.",
                H: "H. ABSTRACTO: Actuación dentro del marco de leyes generales científicas o de la naturaleza; de valores culturales, filosóficos o de negocio."
            }
        }
    },
    
    responsibility: {
        freedom: {
            A: [8, 9, 10, 12, 14, 16, 19, 22, 25, 29, 33, 38, 43, 50, 57],
            B: [12, 14, 16, 19, 22, 25, 29, 33, 38, 43, 50, 57, 66, 76, 87],
            C: [19, 22, 25, 29, 33, 38, 43, 50, 57, 66, 76, 87, 100, 115, 132],
            D: [29, 33, 38, 43, 50, 57, 66, 76, 87, 100, 115, 132, 152, 175, 200],
            E: [43, 50, 57, 66, 76, 87, 100, 115, 132, 152, 175, 200, 230, 264, 304],
            F: [66, 76, 87, 100, 115, 132, 152, 175, 200, 230, 264, 304, 350, 400, 460],
            G: [100, 115, 132, 152, 175, 200, 230, 264, 304, 350, 400, 460, 528, 608, 700],
            H: [152, 175, 200, 230, 264, 304, 350, 400, 460, 528, 608, 700, 800, 920, 1056]
        },
        impactNature: {
            R: 0,
            C: 1,
            S: 2,
            P: 3
        },
        magnitude: {
            N: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4
        },
        descriptions: {
            freedom: {
                A: "A. CONTROL ESTRICTO: Opera según instrucciones directas y detalladas, con una supervisión estrecha y permanente.",
                B: "B. CONTROL: Sujeto a instrucciones y rutinas establecidas de trabajo, bajo supervisión estrecha.",
                C: "C. ESTANDARIZADO: Opera dentro de prácticas y procedimientos estandarizados, instrucciones generales de trabajo y supervisión sobre el avance del trabajo y los resultados.",
                D: "D. REGULACIÓN GENERAL: Opera dentro de prácticas y procedimientos cubiertos por precedentes o por políticas definidas. Supervisión sobre los resultados.",
                E: "E. DIRECCIÓN: Sujeto a prácticas amplias y procedimientos cubiertos por precedentes y políticas. Dirección sobre la gestión.",
                F: "F. DIRECCIÓN GENERAL: Sujeto a dirección genérica y a objetivos y políticas amplias.",
                G: "G. GUIA: Sujetos solamente a una guía general; a objetivos organizativos amplios y a orientaciones estratégicas.",
                H: "H. GUÍA ESTRATÉGICA: Dado el tamaño de la organización y su complejidad, solamente se encuentran sujetos a orientaciones genéricas en función de las tendencias del negocio."
            },
            impactNature: {
                R: "R. Repetitivo: Impacto rutinario y repetitivo en las operaciones.",
                C: "C. Circunstancial: Impacto ocasional en situaciones específicas.",
                S: "S. Servicio: Impacto directo en la calidad de los servicios prestados.",
                P: "P. Primario: Impacto directo y significativo en los resultados principales del negocio."
            },
            magnitude: {
                N: "N. No cuantificada: Impacto cualitativo que no se mide en términos cuantitativos.",
                1: "1. Muy pequeño: Impacto en un área muy limitada de la organización.",
                2: "2. Pequeño: Impacto en un área específica pero más amplia que el nivel 1.",
                3: "3. Medio: Impacto a nivel de departamento o unidad funcional.",
                4: "4. Grande: Impacto en toda la organización o en resultados estratégicos."
            }
        }
    },
    
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
    
    profileTypes: {
        "P4": { name: "Perfil Corto P4", description: "Puntos PS > Puntos AC (Ratio > 0.87)" },
        "P3": { name: "Perfil Corto P3", description: "Puntos PS > Puntos AC (Ratio > 0.76)" },
        "P2": { name: "Perfil Corto P2", description: "Puntos PS > Puntos AC (Ratio > 0.66)" },
        "P1": { name: "Perfil Corto P1", description: "Puntos PS > Puntos AC (Ratio > 0.57)" },
        "LEVEL": { name: "Perfil Balanceado", description: "Puntos AC = Puntos PS (Ratio entre 0.5 y 0.57)" },
        "A1": { name: "Perfil Corto A1", description: "Puntos AC > Puntos PS (Ratio > 0.43)" },
        "A2": { name: "Perfil Corto A2", description: "Puntos AC > Puntos PS (Ratio > 0.38)" },
        "A3": { name: "Perfil Corto A3", description: "Puntos AC > Puntos PS (Ratio > 0.33)" },
        "A4": { name: "Perfil Corto A4", description: "Puntos AC > Puntos PS (Ratio ≤ 0.33)" }
    }
};

// Variables globales
window.currentEvaluation = null;
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

// Función para mostrar notificaciones
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
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }
}

// Función para validar campos requeridos por sección
function validateSection(sectionId) {
    const section = document.getElementById(sectionId);
    let isValid = true;
    
    // Validar inputs requeridos
    const requiredInputs = section.querySelectorAll('[required]');
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('invalid-field');
            setTimeout(() => input.classList.remove('invalid-field'), 500);
            input.style.borderColor = 'var(--danger-color)';
            isValid = false;
            
            if (isValid === false) {
                const label = input.previousElementSibling?.textContent || 'Campo';
                showNotification(`Por favor complete el campo: ${label}`, 'error');
            }
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    // Validación especial para selects en cada sección
    if (sectionId === '2-section') {
        const technical = document.getElementById('technicalCompetence');
        const communication = document.getElementById('communicationLevel');
        const integration = document.getElementById('integrationScope');
        
        if (!technical.value) {
            technical.classList.add('invalid-field');
            setTimeout(() => technical.classList.remove('invalid-field'), 500);
            technical.style.borderColor = 'var(--danger-color)';
            isValid = false;
            showNotification('Por favor seleccione el nivel de Competencia Técnica', 'error');
        }
        if (!communication.value) {
            communication.classList.add('invalid-field');
            setTimeout(() => communication.classList.remove('invalid-field'), 500);
            communication.style.borderColor = 'var(--danger-color)';
            isValid = false;
            showNotification('Por favor seleccione el nivel de Comunicación', 'error');
        }
        if (!integration.value) {
            integration.classList.add('invalid-field');
            setTimeout(() => integration.classList.remove('invalid-field'), 500);
            integration.style.borderColor = 'var(--danger-color)';
            isValid = false;
            showNotification('Por favor seleccione el Ámbito de Integración', 'error');
        }
    }
    
    if (sectionId === '3-section') {
        const complexity = document.getElementById('problemComplexity');
        const freedom = document.getElementById('thinkingFreedom');
        
        if (!complexity.value) {
            complexity.classList.add('invalid-field');
            setTimeout(() => complexity.classList.remove('invalid-field'), 500);
            complexity.style.borderColor = 'var(--danger-color)';
            isValid = false;
            showNotification('Por favor seleccione la Complejidad de las Situaciones', 'error');
        }
        if (!freedom.value) {
            freedom.classList.add('invalid-field');
            setTimeout(() => freedom.classList.remove('invalid-field'), 500);
            freedom.style.borderColor = 'var(--danger-color)';
            isValid = false;
            showNotification('Por favor seleccione el Marco de Referencia', 'error');
        }
    }
    
    if (sectionId === '4-section') {
        const action = document.getElementById('actionFreedom');
        const nature = document.getElementById('impactNature');
        const magnitude = document.getElementById('impactMagnitude');
        
        if (!action.value) {
            action.classList.add('invalid-field');
            setTimeout(() => action.classList.remove('invalid-field'), 500);
            action.style.borderColor = 'var(--danger-color)';
            isValid = false;
            showNotification('Por favor seleccione la Libertad para Actuar', 'error');
        }
        if (!nature.value) {
            nature.classList.add('invalid-field');
            setTimeout(() => nature.classList.remove('invalid-field'), 500);
            nature.style.borderColor = 'var(--danger-color)';
            isValid = false;
            showNotification('Por favor seleccione la Naturaleza del Impacto', 'error');
        }
        if (!magnitude.value) {
            magnitude.classList.add('invalid-field');
            setTimeout(() => magnitude.classList.remove('invalid-field'), 500);
            magnitude.style.borderColor = 'var(--danger-color)';
            isValid = false;
            showNotification('Por favor seleccione la Magnitud del Impacto', 'error');
        }
    }
    
    return isValid;
}

// Función para cambiar de sección
function goToSection(sectionId) {
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
    });
    
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
    
    const stepNumber = sectionId.split('-')[0];
    const step = document.querySelector(`.step[data-step="${stepNumber}"]`);
    if (step) {
        step.classList.add('active');
    }
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Función para cambiar entre contenidos principales
function showContent(contentId) {
    document.querySelectorAll('#evaluationContent, #evaluationsContent, #reportsContent, #settingsContent').forEach(content => {
        content.classList.add('hidden-content');
    });
    
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.remove('hidden-content');
    }
    
    document.querySelectorAll('.nav-links li').forEach(li => {
        li.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`#${contentId.replace('Content', 'Link')}`);
    if (activeLink) {
        activeLink.parentElement.classList.add('active');
    }
    
    if (contentId === 'evaluationsContent') {
        loadEvaluationsList();
    } else if (contentId === 'reportsContent') {
        loadReports();
    }
}

// Función para cargar la lista de evaluaciones
function loadEvaluationsList() {
    const evaluationsList = document.getElementById('evaluationsList');
    if (!evaluationsList) return;
    
    evaluationsList.innerHTML = '<p>Cargando evaluaciones...</p>';
    
    setTimeout(() => {
        const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
        
        if (evaluations.length === 0) {
            evaluationsList.innerHTML = '<p>No hay evaluaciones guardadas.</p>';
            return;
        }
        
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

// Función para eliminar una evaluación
function deleteEvaluation(id) {
    if (confirm('¿Está seguro que desea eliminar esta evaluación?')) {
        let evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
        evaluations = evaluations.filter(e => e.id !== id);
        localStorage.setItem('jobEvaluations', JSON.stringify(evaluations));
        showNotification('Evaluación eliminada correctamente', 'success');
        loadEvaluationsList();
    }
}

// Función para ver una evaluación guardada
function viewEvaluation(id) {
    const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
    const evaluation = evaluations.find(e => e.id === id);
    
    if (!evaluation) {
        showNotification('No se encontró la evaluación', 'error');
        return;
    }
    
    showContent('evaluationContent');
    goToSection('5-section');
    
    document.getElementById('totalScore').textContent = evaluation.scores.total;
    document.getElementById('jobLevel').textContent = evaluation.level.level;
    document.getElementById('levelDescription').textContent = evaluation.level.description;
    document.getElementById('jobDescriptionResult').textContent = evaluation.jobTitle;
    
    animateProgressCircle(evaluation.scores.total);
    document.getElementById('knowHowScore').textContent = `${evaluation.scores.knowHow} pts`;
    document.getElementById('problemSolvingScore').textContent = `${evaluation.scores.problemSolving} pts`;
    document.getElementById('responsibilityScore').textContent = `${evaluation.scores.responsibility} pts`;
    
    const profileType = determineProfileType(evaluation.scores.knowHow, evaluation.scores.problemSolving);
    const profileInfo = evaluationData.profileTypes[profileType];
    document.getElementById('profileType').textContent = profileInfo.name;
    document.getElementById('profileDescription').textContent = profileInfo.description;
    
    animateProgressBars({
        knowHow: evaluation.scores.knowHow,
        problemSolving: evaluation.scores.problemSolving,
        responsibility: evaluation.scores.responsibility
    });
    
    window.currentEvaluation = evaluation;
}

// Función para determinar el Perfil Corto
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

// Función para cargar reportes
function loadReports() {
    const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
    
    if (evaluations.length === 0) {
        document.getElementById('reportsContainer').innerHTML = '<p>No hay suficientes datos para generar reportes.</p>';
        return;
    }
    
    const levelCounts = {};
    const scores = evaluations.map(e => e.scores.total);
    
    evaluationData.jobLevels.forEach(level => {
        levelCounts[level.level] = evaluations.filter(e => 
            e.scores.total >= level.min && e.scores.total <= level.max
        ).length;
    });
    
    createLevelDistributionChart(levelCounts);
    createScoreDistributionChart(scores);
}

// Función para crear gráfico de distribución por nivel
function createLevelDistributionChart(levelCounts) {
    const ctx = document.getElementById('levelDistributionChart').getContext('2d');
    
    if (window.evaluationCharts.levelDistribution) {
        window.evaluationCharts.levelDistribution.destroy();
    }
    
    const labels = Object.keys(levelCounts);
    const data = Object.values(levelCounts);
    const backgroundColors = [
        '#4361ee', '#3f37c9', '#4cc9f0', '#4895ef', '#560bad',
        '#b5179e', '#f72585', '#4caf50', '#ff9800', '#607d8b',
        '#9c27b0', '#2196f3', '#00bcd4', '#009688', '#8bc34a',
        '#cddc39', '#ffc107', '#ff5722', '#795548', '#9e9e9e'
    ];
    
    window.evaluationCharts.levelDistribution = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: backgroundColors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Distribución por Nivel',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
}

// Función para crear gráfico de distribución de puntajes
function createScoreDistributionChart(scores) {
    const ctx = document.getElementById('scoreDistributionChart').getContext('2d');
    
    if (window.evaluationCharts.scoreDistribution) {
        window.evaluationCharts.scoreDistribution.destroy();
    }
    
    const ranges = [
        '0-200', '201-400', '401-600', '601-800', '801-1000', 
        '1001-1200', '1201-1400', '1401-1600'
    ];
    
    const counts = ranges.map(range => {
        const [min, max] = range.split('-').map(Number);
        return scores.filter(score => score >= min && score <= max).length;
    });
    
    window.evaluationCharts.scoreDistribution = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ranges,
            datasets: [{
                label: 'Número de Evaluaciones',
                data: counts,
                backgroundColor: '#4361ee',
                borderColor: '#3f37c9',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de Evaluaciones'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Rango de Puntajes'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Distribución de Puntajes',
                    font: {
                        size: 16
                    }
                }
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
    
    const commIndex = evaluationData.knowHow.communication[communicationLevel];
    const intIndex = evaluationData.knowHow.integration[integrationScope];
    const techScores = evaluationData.knowHow.technical[technicalLevel];
    
    const totalIndex = commIndex + intIndex;
    const adjustedIndex = Math.min(totalIndex, techScores.length - 1);
    
    return techScores[adjustedIndex];
}

// Función para calcular el puntaje de Solución de Problemas (CORREGIDA)
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
    return Math.round(knowHowScore * percentage);
}

// Función para calcular el puntaje de Responsabilidad (CORREGIDA)
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
    
    const totalIndex = natureIndex + magnitudeIndex;
    const adjustedIndex = Math.min(totalIndex, freedomScores.length - 1);
    
    return freedomScores[adjustedIndex];
}

// Función para determinar el nivel del puesto
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

// Función para animar el círculo de progreso
function animateProgressCircle(score) {
    const circle = document.querySelector('.progress-ring-circle');
    if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (score / 1600) * circumference;
        
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);
    }
}

// Función para animar el conteo numérico
function animateNumberCounter(elementId, target) {
    const element = document.getElementById(elementId);
    if (element) {
        let current = 0;
        const duration = 1500;
        const increment = target / (duration / 16);
        
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

// Función para animar las barras de progreso
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

// Función para guardar evaluaciones en CSV
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
    
    const csvContent = [headers, ...rows]
        .map(row => row.join(','))
        .join('\n');
    
    return csvContent;
}

// Función para descargar CSV
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

// Función para guardar evaluaciones en archivo CSV local
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

// Función mejorada para guardar en LocalStorage
function saveEvaluationToLocal(data) {
    try {
        let evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
        
        const profileType = determineProfileType(data.scores.knowHow, data.scores.problemSolving);
        const profileInfo = evaluationData.profileTypes[profileType];
        
        const evaluationWithMeta = {
            ...data,
            id: Date.now(),
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

// Función para exportar una evaluación guardada
function exportSavedEvaluation(id) {
    const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
    const evaluation = evaluations.find(e => e.id === id);
    
    if (!evaluation) {
        showNotification('No se encontró la evaluación', 'error');
        return;
    }
    
    exportEvaluation(evaluation);
}

// Función mejorada para exportar evaluación
function exportEvaluation(data, format = 'json') {
    try {
        let content, mimeType, extension;
        
        if (format === 'json') {
            content = JSON.stringify(data, null, 2);
            mimeType = 'application/json';
            extension = 'json';
        } else if (format === 'csv') {
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

// Función para mostrar opciones de guardado
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
    
    // Event listeners para los botones del diálogo
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

// Función para generar PDF COMPLETO con gráficos y detalles
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
    
    // Gráfico radial (simplificado para PDF)
    const maxScore = 1056;
    const scores = [
        { label: 'Know-How', value: evalData.scores.knowHow, color: [67, 97, 238] },
        { label: 'Solución Problemas', value: evalData.scores.problemSolving, color: [244, 63, 94] },
        { label: 'Responsabilidad', value: evalData.scores.responsibility, color: [16, 185, 129] }
    ];
    
    const radarRadius = 30;
    const radarX = centerX;
    const radarY = 100;
    
    // Dibujar ejes del gráfico radial
    doc.setDrawColor(200, 200, 200);
    for (let i = 0; i < 3; i++) {
        doc.circle(radarX, radarY, radarRadius * (i + 1) / 3, 'D');
    }
    
    // Dibujar datos
    scores.forEach((score, i) => {
        const angle = (i * (2 * Math.PI / scores.length)) - Math.PI / 2;
        const scoreRadius = (score.value / maxScore) * radarRadius;
        const x = radarX + scoreRadius * Math.cos(angle);
        const y = radarY + scoreRadius * Math.sin(angle);
        
        doc.setFillColor(score.color[0], score.color[1], score.color[2], 100);
        doc.circle(x, y, 3, 'F');
        
        // Conectar al centro
        if (i === 0) doc.moveTo(radarX, radarY);
        doc.lineTo(x, y);
        doc.stroke();
    });
    
    // Leyenda
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

    // --- TABLA DE PUNTAJES ---
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

    // --- DESCRIPCIONES DE LAS SELECCIONES ---
    doc.addPage();
    doc.setFontSize(18);
    doc.setTextColor(40, 53, 147);
    doc.text('Explicación de Criterios', margin, 20);
    
    // Know-How: Competencia Técnica
    doc.setFontSize(14);
    doc.text('1. Know-How', margin, 30);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Competencia Técnica:', margin, 40);
    doc.setFont('helvetica', 'normal');
    const techDesc = evaluationData.knowHow.descriptions.technical[techLevel];
    doc.text(doc.splitTextToSize(techDesc, pageWidth - 2 * margin), margin, 50);
    
    // Know-How: Comunicación
    doc.setFont('helvetica', 'bold');
    doc.text('Nivel de Comunicación:', margin, 80);
    doc.setFont('helvetica', 'normal');
    const commDesc = evaluationData.knowHow.descriptions.communication[commLevel];
    doc.text(doc.splitTextToSize(commDesc, pageWidth - 2 * margin), margin, 90);
    
    // Know-How: Integración
    doc.setFont('helvetica', 'bold');
    doc.text('Ámbito de Integración:', margin, 120);
    doc.setFont('helvetica', 'normal');
    const intDesc = evaluationData.knowHow.descriptions.integration[intLevel];
    doc.text(doc.splitTextToSize(intDesc, pageWidth - 2 * margin), margin, 130);
    
    // Solución de Problemas: Complejidad
    doc.addPage();
    doc.setFontSize(14);
    doc.text('2. Solución de Problemas', margin, 20);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Complejidad de las Situaciones:', margin, 30);
    doc.setFont('helvetica', 'normal');
    const compDesc = evaluationData.problemSolving.descriptions.complexity[compLevel];
    doc.text(doc.splitTextToSize(compDesc, pageWidth - 2 * margin), margin, 40);
    
    // Solución de Problemas: Libertad
    doc.setFont('helvetica', 'bold');
    doc.text('Marco de Referencia - Libertad de Pensar:', margin, 70);
    doc.setFont('helvetica', 'normal');
    const thinkDesc = evaluationData.problemSolving.descriptions.thinkingFreedom[thinkLevel];
    doc.text(doc.splitTextToSize(thinkDesc, pageWidth - 2 * margin), margin, 80);
    
    // Responsabilidad: Libertad para Actuar
    doc.addPage();
    doc.setFontSize(14);
    doc.text('3. Responsabilidad', margin, 20);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Libertad para Actuar:', margin, 30);
    doc.setFont('helvetica', 'normal');
    const actionDesc = evaluationData.responsibility.descriptions.freedom[actionLevel];
    doc.text(doc.splitTextToSize(actionDesc, pageWidth - 2 * margin), margin, 40);
    
    // Responsabilidad: Naturaleza Impacto
    doc.setFont('helvetica', 'bold');
    doc.text('Naturaleza del Impacto:', margin, 70);
    doc.setFont('helvetica', 'normal');
    const natureDesc = evaluationData.responsibility.descriptions.impactNature[impactNature];
    doc.text(doc.splitTextToSize(natureDesc, pageWidth - 2 * margin), margin, 80);
    
    // Responsabilidad: Magnitud Impacto
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
    
    // Guardar PDF
    doc.save(`Evaluacion_Completa_${evalData.jobTitle.replace(/\s+/g, '_')}.pdf`);
    showNotification('PDF generado correctamente', 'success');
}

function handleSaveResult(result, type) {
    if (result.success) {
        const message = type === 'local' 
            ? 'Evaluación guardada localmente' 
            : 'Evaluación guardada en CSV';
        showNotification(message, 'success');
        
        if (document.getElementById('evaluationsContent') && !document.getElementById('evaluationsContent').classList.contains('hidden-content')) {
            loadEvaluationsList();
        }
    } else {
        showNotification(`Error al guardar ${type === 'local' ? 'localmente' : 'en CSV'}: ${result.error}`, 'error');
    }
}

// Función principal de evaluación (CORREGIDA)
function evaluateJob() {
    // Validar campos requeridos primero
    const jobTitle = document.getElementById('jobTitle').value;
    if (!jobTitle) {
        showNotification('Por favor ingrese el nombre del puesto', 'error');
        return;
    }

    // Calcular puntajes
    const knowHowScore = calculateKnowHowScore();
    if (knowHowScore === null) return;
    
    const problemSolvingScore = calculateProblemSolvingScore(knowHowScore);
    if (problemSolvingScore === null) return;
    
    const responsibilityScore = calculateResponsibilityScore();
    if (responsibilityScore === null) return;
    
    const totalScore = knowHowScore + problemSolvingScore + responsibilityScore;
    const jobLevel = determineJobLevel(totalScore);
    const profileType = determineProfileType(knowHowScore, problemSolvingScore);
    const profileInfo = evaluationData.profileTypes[profileType];

    // Mostrar resultados
    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('jobLevel').textContent = jobLevel.level;
    document.getElementById('levelDescription').textContent = jobLevel.description;
    document.getElementById('jobDescriptionResult').textContent = jobTitle;
    
    document.getElementById('profileType').textContent = profileInfo.name;
    document.getElementById('profileDescription').textContent = profileInfo.description;
    document.getElementById('knowHowScore').textContent = `${knowHowScore} pts`;
    document.getElementById('problemSolvingScore').textContent = `${problemSolvingScore} pts`;
    document.getElementById('responsibilityScore').textContent = `${responsibilityScore} pts`;

    // Animaciones
    animateProgressCircle(totalScore);
    animateNumberCounter('totalScore', totalScore);
    animateProgressBars({
        knowHow: knowHowScore,
        problemSolving: problemSolvingScore,
        responsibility: responsibilityScore
    });

    // Guardar datos para exportar
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

    // Ir a resultados
    goToSection('5-section');
}

// Función para resetear la evaluación
function resetEvaluation() {
    window.currentEvaluation = null;
    
    document.getElementById('jobTitle').value = '';
    document.getElementById('jobDescription').value = '';
    document.getElementById('jobResponsibilities').value = '';
    
    document.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });
    
    document.getElementById('totalScore').textContent = '0';
    document.getElementById('jobLevel').textContent = 'Nivel 0';
    document.getElementById('levelDescription').textContent = '';
    document.getElementById('jobDescriptionResult').textContent = '';
    document.getElementById('knowHowScore').textContent = '0 pts';
    document.getElementById('problemSolvingScore').textContent = '0 pts';
    document.getElementById('responsibilityScore').textContent = '0 pts';
    document.getElementById('profileType').textContent = 'Perfil no determinado';
    document.getElementById('profileDescription').textContent = 'No se ha determinado el perfil corto';
    
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
    
    goToSection('1-section');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 1000);
    
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
    
    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('click', function() {
            const stepNumber = this.getAttribute('data-step');
            goToSection(`${stepNumber}-section`);
        });
    });
    
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
    
    document.getElementById('evaluateBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        evaluateJob();
    });
    
    // Corregido: Event listener para el botón Guardar Evaluación
    document.getElementById('saveBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.currentEvaluation) {
            showSaveOptionsDialog();
        } else {
            showNotification('No hay evaluación para guardar', 'error');
        }
    });
    
    document.getElementById('exportBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.currentEvaluation) {
            exportEvaluation(window.currentEvaluation, 'json');
        } else {
            showNotification('No hay evaluación para exportar', 'error');
        }
    });
    
    // Corregido: Event listener para el botón Generar PDF
    document.getElementById('generatePdfBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        generatePDF();
    });
    
    document.getElementById('newEvalBtn')?.addEventListener('click', resetEvaluation);
    document.getElementById('newEvaluationBtn')?.addEventListener('click', resetEvaluation);
    document.getElementById('exportAllBtn')?.addEventListener('click', saveEvaluationsToLocalCSV);
    
    showContent('evaluationContent');
    goToSection('1-section');
});