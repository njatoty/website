import CodeViewer from '@/components/ui/code-viewer';
import Jumbotron from '@/components/ui/jumbotron';
import { WithArchiveLabel, WithClockLabel, WithDateLabel } from '@/components/ui/label-with-icon';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import { CorrectParagraph, HeadingTitle1, HeadingTitle2, HeadingTitle3, HeadingTitle4, IncorrectParagraph, ListDisc, Paragraph, Problem, Solution, Specify } from '@/components/ui/typography';
import React from 'react'
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-scroll';

const menuList = [
    {
        id: "srp",
        label: "Single Responsibility"
    },
    {
        id: "ocp",
        label: "Open/Close"
    },
    {
        id: "lsp",
        label: "Liskov Substitution"
    },
    {
        id: "isp",
        label: "Interface Segregation"
    },
    {
        id: "dip",
        label: "Dependency Invertion"
    }
];

const code = {
    wrongSRP: `// Component QuizList
function QuizList() {
    const [quizList, setQuizList] = useState<QuizItem[]>([]);

    useEffect(() => {
        fetch('/api/quiz')
            .then(async (res) => {
                const data = await res.json();
                setQuizList(data);
            });
    }, []);

    return (
        <ul>
            {quizList.map((quiz) => (
                <li key={quiz.id}>
                    {quiz.question}
                </li>
            ))}
        </ul>
    );
}`,
    goodSRPHook: `// quiz-list.hook.ts
import { useState, useEffect } from 'react';

export const useQuizList = () => {
    const [quizList, setQuizList] = useState<QuizItem[]>([]);

    useEffect(() => {
        fetch('/api/quiz')
            .then(async (res) => {
                const data = await res.json();
                setQuizList(data);
            });
    }, []);

    return quizList;
};`,
    goodSRP: `// quiz-list.js
import { useQuizList } from './quiz-list.hook.ts';

function QuizList() {
    const quizList = useQuizList();

    return (
        <ul>
            {quizList.map((quiz) => (
                <li key={quiz.id}>
                    {quiz.question}
                </li>
            ))}
        </ul>
    );
}`,
    wrongOCP: `// Interface for QuizItem props
interface QuizItemProps {
    item: {
        type: 'multiple-choice' | 'boolean' | 'short-answer';
        question: string;
        options?: string[];
    };
}

// Component QuizItem
function QuizItem({ item } : QuizItemProps) {

    // Render multiple-choice quiz item
    if (item.type === 'multiple-choice') {
        return <div>Render multiple-choice quiz</div>;
    }

    // Render boolean quiz item
    if (item.type === 'boolean') {
        return <div>Render boolean quiz</div>;
    }

    // Render short-answer quiz item
    if (item.type === 'short-answer') {
        return <div>Render short-answer quiz</div>;
    }

    return null; // If the quiz type is unknown
}`,
    goodOCPComponents: `// Components
export const MultipleChoiceQuizItem = ({ item } : QuizItemProps) => {
    return <div>Render multiple-choice quiz</div>;
};

export const BooleanQuizItem = ({ item } : QuizItemProps) => {
    return <div>Render boolean quiz</div>;
};

export const ShortAnswerQuizItem = ({ item } : QuizItemProps) => {
    return <div>Render short-answer quiz</div>;
};`,
    goodOCPRenderer: `const quizRenderer = {
    'multiple-choice': MultipleChoiceQuizItem,
    'short-answer': ShortAnswerQuizItem,
    'boolean': BooleanQuizItem,
};`,
    goodOCPQuizItem: `export const QuizItem = ({ item } : QuizItemProps) => {
    const ItemComponent = quizRenderer[item.type];
    return ItemComponent ? <ItemComponent item={item} /> : null;
};`,
    goodOCPDropdown: `// New component for type dropdown
export const DropdownQuizItem = ({ item } : QuizItemProps) => {
    return <div>Render dropdown quiz</div>;
};`,
    goodOCPRendererUpdate: `const quizRenderer = {
    'multiple-choice': MultipleChoiceQuizItem,
    'short-answer': ShortAnswerQuizItem,
    'boolean': BooleanQuizItem,
    'dropdown': DropdownQuizItem, // New type added without modifying QuizItem!
};`,
    wrongLSP: `const quizRenderer = {
    'multiple-choice': MultipleChoiceQuizItem,
    'short-answer': ShortAnswerQuizItem,
    'boolean': BooleanQuizItem,
};`,
    goodLSPBaseQuizItem: `export const BaseQuizItem = ({ item, children }) => {
    return (
        <div>
            <p>{item.question}</p>
            {children}
        </div>
    );
};`,
    goodLSPMultipleChoice: `export const MultipleChoiceQuizItem = ({ item } : QuizItemProps) => {
    return (
        <BaseQuizItem item={item}>
            <select>
                {item.options?.map((opt, index) => (
                    <option key={index}>{opt}</option>
                ))}
            </select>
        </BaseQuizItem>
    );
};`,
    goodLSPShort: `export const ShortAnswerQuizItem = ({ item } : QuizItemProps) => {
    return (
        <BaseQuizItem item={item}>
            <input type="text" />
        </BaseQuizItem>
    );
};`,
    goodLSPQuizITem: `export const QuizItem = ({ item } : QuizItemProps) => {
    const ItemComponent = quizRenderer[item.type];

    return ItemComponent ? <ItemComponent item={item} /> : null;
};`,
    wrongISP: `interface QuizItem {
    question: string;
    options: string[];
    validateAnswer: (answer: string) => boolean;
};`,
    goodISP: `// Interface de base
interface BaseQuizItem = {
    question: string;
    validateAnswer: (answer: string) => boolean;
};

// Interface pour choix multiple
interface MultipleChoiceQuizItem extends BaseQuizItem {
    options: string[],
};

// Interface pour question courte
interface ShortAnswerQuizItem extends BaseQuizItem {
    expectedAnswer: string,
};`,
}

const ReactSolidPrinciple = () => {
    return (
        <div className='w-full'>
            <Jumbotron className='flex w-full rounded-none' tagIcon={<FaReact size={64} className='float-right' />}>
                <MaxWidthWrapper className='mx-auto'>
                    <HeadingTitle1 className='mb-2 text-c-light'>Le principe du S.O.L.I.D</HeadingTitle1>
                    <HeadingTitle3 className='text-c-light'>
                        Application du Principe SOLID sur un Projet <Specify>React</Specify>.
                    </HeadingTitle3>
                    <div className="flex flex-wrap items-center gap-2 mt-4 max-md:text-sm lg:gap-6 opacity-85">
                        <WithDateLabel>07 Février 2025</WithDateLabel>
                        <WithArchiveLabel>ANDRIAMANIRISOA Njatotiana Fiononana</WithArchiveLabel>
                        <WithClockLabel>15 minutes</WithClockLabel>
                    </div>
                </MaxWidthWrapper>
            </Jumbotron>
            <MaxWidthWrapper className='flex items-start w-full mx-auto max-md:px-5'>
                {/* menu or link */}
                <div className="sticky z-40 flex-shrink-0 w-full px-3 text-sm py-7 top-[55.21px] max-w-48 max-md:hidden">
                    <HeadingTitle4 className='mb-3'>Tables des matières</HeadingTitle4>
                    <ListDisc className='flex flex-col gap-3 list-decimal'>
                        {
                            menuList.map(menu => (
                                <li key={menu.id}>
                                    <Link
                                        to={menu.id}
                                        activeClass='active'
                                        offset={-80}
                                        spy
                                        smooth
                                        duration={300}
                                        className='cursor-pointer whitespace-nowrap text-c-dark1 dark:text-c-gray hover:text-c-dark3 dark:hover:text-c-light section-link'
                                    >
                                        {menu.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ListDisc>
                </div>
                <div className="flex-grow w-full h-full py-8 md:px-8 md:border-l border-c-gray-0 dark:border-c-dark0">
                    <div className="w-full">
                        <HeadingTitle1>Nous allons appliquer le Principe SOLID sur un Quiz.</HeadingTitle1>
                        <div className="flex flex-col gap-3 my-3">
                            <Paragraph>
                                Lorsque l'on développe une application avec React, il est essentiel d'avoir une architecture claire et évolutive. Les principes SOLID, qui guident la conception orientée objet, peuvent également être appliqués dans un contexte React pour améliorer la <b>maintenabilité</b>, la <b>réutilisabilité</b> et la <b>scalabilité</b> de notre code.
                            </Paragraph>
                            <Paragraph>
                                Dans cet article, nous allons voir comment appliquer ces principes pour structurer nos components de manière modulaire et évolutive. L'objectif est d'éviter un couplage excessif, de favoriser la réutilisation et de permettre l'ajout de nouvelles fonctionnalités sans modifier le code existant.
                            </Paragraph>
                            <Paragraph>
                                Nous explorerons comment chaque principe SOLID s'applique à la conception des components React dans un projet de quiz :
                            </Paragraph>

                            <ListDisc>
                                <ListDisc.Item>Single Responsibility Principle (SRP)</ListDisc.Item>
                                <ListDisc.Item>Open/Closed Principle (OCP)</ListDisc.Item>
                                <ListDisc.Item>Liskov Substitution Principle (LSP)</ListDisc.Item>
                                <ListDisc.Item>Interface Segregation Principle (ISP)</ListDisc.Item>
                                <ListDisc.Item>Dependency Inversion Principle (DIP)</ListDisc.Item>
                            </ListDisc>

                            <Paragraph>
                                Voyons maintenant comment chacun de ces principes peut être appliqué à un projet de quiz pour améliorer sa conception.
                            </Paragraph>
                        </div>
                    </div>

                    <div id="srp" className='flex flex-col w-full gap-4 py-6'>
                        <div className="flex flex-col gap-3 my-2">
                            <HeadingTitle2>1. Single Responsibility Principle (SRP) in SOLID</HeadingTitle2>
                            <Paragraph>
                                Ce principe stipule qu'un component ne doit avoir qu'<Specify>une seule raison de changer</Specify>. Cela signifie qu'un component doit se concentrer uniquement sur <Specify>une seule responsabilité</Specify>.
                            </Paragraph>
                        </div>
                        {/* PROBLEM VIOLATE SRP */}
                        <div className="flex flex-col w-full">
                            <HeadingTitle3>
                                <Problem>Problème:</Problem> Un component de liste de quiz qui viole SRP
                            </HeadingTitle3>
                            <Paragraph className='my-2'>
                                Une approche naïve consisterait à avoir un component qui <b>Fetch</b> et <b>Render</b> les données du quiz :
                            </Paragraph>

                            {/* Showing wrong code for SRP */}
                            <CodeViewer code={code.wrongSRP} />
                            {/* End Showing wrong code for SRP */}

                            <div className="w-full my-2">
                                <HeadingTitle3>
                                    Pourquoi est-ce mauvais?
                                </HeadingTitle3>
                                <IncorrectParagraph>
                                    Le component QuizList est à la fois résponsable du <b>Fetching</b> une liste et de ses <b>Rendu</b>.
                                </IncorrectParagraph>
                                <IncorrectParagraph>
                                    Si on a besoin de changer la logique du Fetching (ex, avec GraphQL au lieu de REST), nous sommes obligé à modifier le component.
                                </IncorrectParagraph>
                                <IncorrectParagraph>
                                    Cela rend le component difficile à maintenir et à tester.
                                </IncorrectParagraph>
                            </div>
                        </div>
                        {/* SOLUTION FOR SRP */}
                        <div className="w-full">
                            <div className="flex flex-col gap-3 my-2">
                                <HeadingTitle3>
                                    <Solution>SOLUTION:</Solution> Implementer la logique Fetching data dans un Custom Hook
                                </HeadingTitle3>
                                <Paragraph>
                                    Pour suivre l'approche SRP, nous séparons les préoccupations en créant un Custom Hook pour récupérer les données.
                                </Paragraph>
                            </div>

                            <div className="w-full">
                                <Paragraph className='my-2'>
                                    Etape 1: Création d'un Custom Hook pour Data Fetching
                                </Paragraph>

                                {/* Showing good code for SRP Hook*/}
                                <CodeViewer code={code.goodSRPHook} />
                                {/* End Showing good code for SRP Hook */}
                            </div>

                            <div className="w-full">
                                <Paragraph className='my-2'>
                                    Etape 2: Mettre à jour le Component QuizList pour se concentrer seulement sur le Rendu
                                </Paragraph>

                                {/* Showing good code for SRP */}
                                <CodeViewer code={code.goodSRP} />
                                {/* End Showing good code for SRP */}
                            </div>

                            <div className="w-full my-2">
                                <HeadingTitle3>
                                    Pourquoi cette approche est-elle meilleure ?
                                </HeadingTitle3>
                                <CorrectParagraph>
                                    Le component QuizList suit maintenant SRP - il ne gère que le rendu de l'interface utilisateur.
                                </CorrectParagraph>
                                <CorrectParagraph>
                                    Le hook useQuizList encapsule la logique de récupération, ce qui la rend réutilisable et testable.
                                </CorrectParagraph>
                                <CorrectParagraph>
                                    Nous pouvons changer la façon dont nous récupérons les données (REST, GraphQL, stockage local) sans modifier QuizList.
                                </CorrectParagraph>
                            </div>
                        </div>
                    </div>

                    <div id="ocp" className='flex flex-col w-full gap-4 py-6'>
                        <div className="flex flex-col gap-3 my-2">
                            <HeadingTitle2>2. Open/Close Principle</HeadingTitle2>
                            <Paragraph>
                                Le component doit être <Specify>ouvert à l'extension</Specify> et <Specify>fermé à la modification</Specify>. Cela signifie que nous devons être en mesure d'étendre le comportement d'un component sans modifier son code existant.
                            </Paragraph>
                        </div>
                        {/* PROBLEM VIOLATE SRP */}
                        <div className="w-full">
                            <HeadingTitle3>
                                <Problem>Problème:</Problem> Un component QuizItem qui viole l'OCP
                            </HeadingTitle3>
                            <Paragraph className='my-2'>
                                Supposons que nous ayons un component qui affiche différents types d'éléments de quiz :
                            </Paragraph>
                            <ListDisc>
                                <ListDisc.Item>Multi Choice</ListDisc.Item>
                                <ListDisc.Item>Boolean (True/False)</ListDisc.Item>
                                <ListDisc.Item>Short Answer</ListDisc.Item>
                            </ListDisc>

                            <Paragraph className='my-2'>Une mise en œuvre naïve pourrait ressembler à ceci :</Paragraph>
                            <CodeViewer code={code.wrongOCP} />

                            <div className="w-full my-2">
                                <HeadingTitle3>
                                    Quel est le problème avec cette approche ?
                                </HeadingTitle3>
                                <IncorrectParagraph>
                                    Chaque fois que nous ajoutons un nouveau type de questionnaire (par exemple, « dropdown »), nous devons modifier ce component en ajoutant une autre condition if.
                                </IncorrectParagraph>
                                <IncorrectParagraph>
                                    Cela va à l'encontre du principe d'ouverture/fermeture, car le component n'est pas fermé à la modification : chaque nouveau type de quiz nécessite de modifier la logique existante.
                                </IncorrectParagraph>
                            </div>
                        </div>

                        {/* SOLUTION FOR OCP */}
                        <div className="w-full">
                            <div className="flex flex-col gap-3 my-2">
                                <HeadingTitle3>
                                    <Solution>SOLUTION:</Solution> Application du OCP
                                </HeadingTitle3>
                                <Paragraph>
                                    Pour y remédier, nous devrions séparer chaque type de quiz dans son propre component et utiliser une approche de rendu dynamique.
                                </Paragraph>
                            </div>

                            <div className="w-full">
                                <Paragraph className='my-2'>
                                    Etape 1: Création des components individuels
                                </Paragraph>
                                <CodeViewer code={code.goodOCPComponents} />
                            </div>

                            <div className="w-full">
                                <Paragraph className='my-2'>
                                    Etape 2: Créer un objet de rendu (Quiz renderer)
                                </Paragraph>
                                <CodeViewer code={code.goodOCPRenderer} />
                            </div>

                            <div className="block w-full">
                                <Paragraph className='my-2'>
                                    Etape 3: Implémentation du component QuizItem
                                </Paragraph>
                                <CodeViewer code={code.goodOCPQuizItem} />

                                <Paragraph>Désormais, si nous devons prendre en charge un nouveau type de quiz (par exemple, Dropdown), nous n'avons plus besoin de <Specify>toucher au component QuizItem</Specify> !</Paragraph>

                                <Paragraph className='mt-2'>1 - Création d'un component Dropdown</Paragraph>
                                <CodeViewer code={code.goodOCPDropdown} />

                                <Paragraph className='mt-2'>2 - Une simple mise à jour sur le "quizRenderer"</Paragraph>
                                <CodeViewer code={code.goodOCPRendererUpdate} />
                            </div>

                            <div className="w-full my-2">
                                <HeadingTitle3>
                                    Pourquoi cette approche est-elle meilleure ?
                                </HeadingTitle3>
                                <CorrectParagraph>
                                    Le component QuizItem n'a jamais besoin d'être modifié lorsque de nouveaux types de quiz sont ajoutés.
                                    Le système est plus facile à maintenir et à étendre.
                                </CorrectParagraph>
                                <CorrectParagraph>
                                    Le système suit le principe ouvert/fermé - ouvert à l'extension (nouveaux types), fermé à la modification (aucun changement nécessaire dans la logique existante).
                                </CorrectParagraph>
                                <Paragraph className='my-2 italic'>
                                    En utilisant cette approche, nous protégeons notre component pour l'avenir et le rendons évolutif et maintenable !
                                </Paragraph>
                            </div>
                        </div>
                    </div>


                    <div id="lsp" className='flex flex-col w-full gap-4 py-6'>
                        <div className="flex flex-col gap-3 my-2">
                            <HeadingTitle2>3. Liskov Substitution Principle</HeadingTitle2>
                            <Paragraph>
                                Le LSP signifie que les <Specify>sous-types</Specify> doivent pouvoir remplacer leurs <Specify>types de base</Specify> sans affecter le bon fonctionnement du programme.
                                <br />
                                En d'autres termes, si un programme attend un certain type d'objet, il doit pouvoir fonctionner correctement avec n'importe lequel de ses sous-types, sans erreur ni comportement inattendu.
                            </Paragraph>
                        </div>
                        {/* PROBLEM VIOLATE LSP */}
                        <div className="w-full">
                            <HeadingTitle3>
                                <Problem>Problème:</Problem> Violation potentielle du LSP dans QuizItem
                            </HeadingTitle3>
                            <Paragraph className='my-2'>
                                Actuellement, chaque type de quiz est un component distinct, sélectionné dynamiquement via l'objet quizRenderer :
                            </Paragraph>
                            <CodeViewer code={code.wrongLSP} />

                            <div className="w-full my-2">
                                <HeadingTitle3>
                                    Quel est le problème avec cette approche ?
                                </HeadingTitle3>
                                <Paragraph>
                                    Cependant, aucun contrat n'est imposé pour garantir que tous les components de quiz fonctionnent de manière cohérente. Cela peut entraîner plusieurs problèmes :
                                </Paragraph>

                                <IncorrectParagraph>
                                    Certains components de quiz n'ont pas les props nécessaires.
                                </IncorrectParagraph>
                                <IncorrectParagraph>
                                    Différents components renvoient des structures JSX incohérentes.
                                </IncorrectParagraph>
                                <IncorrectParagraph>
                                    Un comportement inattendu de l'UI lors du changement de type de quiz.
                                </IncorrectParagraph>

                                <Paragraph>
                                    Par exemple, supposons que tous les types de quiz nécessitent <Specify>une question</Specify> et <Specify>des options</Specify>, mais qu'un quiz à réponse courte n'a pas d'options. Si nous essayons de faire <b>options.map(...)</b> dans QuizItem, cela provoquerait une erreur.
                                </Paragraph>
                            </div>
                        </div>

                        {/* SOLUTION FOR LSP */}
                        <div className="w-full">
                            <div className="flex flex-col gap-3 my-2">
                                <HeadingTitle3>
                                    <Solution>SOLUTION:</Solution>  Appliquer le LSP avec une interface commune
                                </HeadingTitle3>
                                <Paragraph>
                                    Au lieu de laisser chaque component de quiz définir librement sa propre structure, nous pouvons créer un <b>BaseQuizItem</b> qui impose une structure commune.
                                </Paragraph>
                            </div>

                            <div className="w-full">
                                <Paragraph className='my-2'>
                                    Etape 1: Définir un component de base pour quiz item.
                                </Paragraph>
                                <CodeViewer code={code.goodLSPBaseQuizItem} />
                            </div>

                            <div className="w-full">
                                <Paragraph className='my-2'>
                                    Etape 2: Étendre <b>BaseQuizItem</b> dans chaque type de quiz
                                </Paragraph>
                                <CodeViewer code={code.goodLSPMultipleChoice} />
                                <Paragraph>De même, nous imposons une cohérence dans le quiz à réponse courte :</Paragraph>
                                <CodeViewer code={code.goodLSPShort} />
                            </div>

                            <div className="block w-full">
                                <Paragraph className='my-2'>
                                    Etape 3: Assurer que <b>QuizItem</b> peut substituer n'importe quel type de quiz en toute sécurité
                                </Paragraph>
                                <CodeViewer code={code.goodLSPQuizITem} />
                            </div>

                            <div className="w-full my-2">
                                <HeadingTitle3>
                                    Pourquoi cette approche est-elle meilleure ?
                                </HeadingTitle3>
                                <CorrectParagraph>
                                    Chaque type de quiz suit la même structure (garantissant la substituabilité).
                                </CorrectParagraph>
                                <CorrectParagraph>
                                    BaseQuizItem standardise l'affichage, évitant les structures UI incohérentes.
                                </CorrectParagraph>
                                <CorrectParagraph>
                                    Aucune omission de props obligatoires, empêchant les erreurs à l'exécution.
                                </CorrectParagraph>
                                <CorrectParagraph>
                                    Respecte correctement le LSP, rendant le système extensible et maintenable.
                                </CorrectParagraph>
                                <Paragraph className='my-2 italic'>
                                    Grâce à ces améliorations, nous nous assurons que tout nouveau type de quiz peut être substitué sans problème, sans casser le système—un aspect clé du Principe de Substitution de Liskov !
                                </Paragraph>
                            </div>
                        </div>
                    </div>

                    <div id="isp" className='flex flex-col w-full gap-4 py-6'>
                        <div className="flex flex-col gap-3 my-2">
                            <HeadingTitle2>3. Interface Segregation Principle</HeadingTitle2>
                            <Paragraph>
                                Le ISP stipule qu'une classe ne doit pas être <Specify>obligée d'implémenter des interfaces qu'elle n'utilise pas</Specify>. Cela signifie qu'il vaut mieux diviser une grande interface en plusieurs interfaces plus spécifiques.
                            </Paragraph>
                        </div>
                        {/* PROBLEM VIOLATE LSP */}
                        <div className="w-full">
                            <HeadingTitle3>
                                <Problem>Problème:</Problem>  Une seule interface pour tous les types de quiz
                            </HeadingTitle3>
                            <Paragraph className='my-2'>
                                Si nous avions une seule interface qui couvre tous les types de quiz, nous pourrions introduire des méthodes inutiles dans certains components.
                                <br />
                                <br />
                                Par exemple :
                            </Paragraph>
                            <CodeViewer code={code.wrongISP} />

                            <div className="w-full my-2">
                                <HeadingTitle3>
                                    Quel est le problème avec cette approche ?
                                </HeadingTitle3>
                                <Paragraph>
                                    Mais tous les types de quiz n'ont pas d'options !
                                </Paragraph>

                                <IncorrectParagraph>
                                    Un quiz à réponse courte (short-answer) n'a pas besoin de options.
                                </IncorrectParagraph>
                                <IncorrectParagraph>
                                    Cela force des components à implémenter des propriétés qui ne les concernent pas.
                                </IncorrectParagraph>

                            </div>
                        </div>

                        {/* SOLUTION FOR ISP */}
                        <div className="w-full">
                            <div className="flex flex-col gap-3 my-2">
                                <HeadingTitle3>
                                    <Solution>SOLUTION:</Solution> Segmentation en interfaces spécifiques
                                </HeadingTitle3>
                            </div>

                            <div className="w-full">
                                <Paragraph className='my-2'>
                                    Nous allons créer plusieurs interfaces plus adaptées pourque chaque type de quiz possède uniquement ce dont il a besoin :
                                </Paragraph>
                                <CodeViewer code={code.goodISP} />
                            </div>

                            <div className="w-full my-2">
                                <HeadingTitle3>
                                    Pourquoi cette approche est-elle meilleure ?
                                </HeadingTitle3>

                                <CorrectParagraph>
                                    Chaque quiz n'implémente que ce dont il a besoin.
                                </CorrectParagraph>
                                <CorrectParagraph>
                                    Évite l'ajout de propriétés inutiles dans certains types de quiz.
                                </CorrectParagraph>
                                <CorrectParagraph>
                                    Aucune omission de props obligatoires, empêchant les erreurs à l'exécution.
                                </CorrectParagraph>
                                <CorrectParagraph>
                                    Favorise une conception plus modulaire et évolutive.
                                </CorrectParagraph>
                                <CorrectParagraph>
                                    Respecte le principe ISP et améliore la maintenabilité.
                                </CorrectParagraph>
                                <Paragraph className='my-2 italic'>
                                    Avec cette approche, nous nous assurons que chaque composant de quiz ne dépend que des propriétés nécessaires et ne contient pas de code inutile.
                                </Paragraph>
                            </div>
                        </div>
                    </div>

                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default ReactSolidPrinciple