import logo from '../assets/imgs/logo/logo.webp'
import heroDefaultImg from '../assets/imgs/hero/lawHero.webp'
import heroDefaultMobileImg from '../assets/imgs/hero/lawHeroMobile.webp'
import imgFeatures from '../assets/imgs/features/imgServices.webp'
import aboutImg from '../assets/imgs/about/aboutImg.webp'
// import team1 from '../assets/imgs/team/team1.webp'
// import team2 from '../assets/imgs/team/team2.webp'
import aboutSocialImg from '../assets/imgs/about/aboutSocial.webp'
import imgSteps from '../assets/imgs/steps/imgSteps.webp'

import {
  Baby,
  Ban,
  Briefcase,
  BriefcaseMedical,
  Building,
  Car,
  CircleDollarSign,
  FileX,
  Gavel,
  Home,
  Key,
  LucideIdCard,
  RefreshCcw,
  Scale,
  User,
  X,
} from 'lucide-react'
import { Users } from 'lucide-react'
import { FileText } from 'lucide-react'

const currentYear = new Date().getFullYear()

export const infos = {
  name: 'Paulo Nascimento Advogados',
  email: 'contato', // Email desejado pelo cliente
  emailSecundario: 'psnascimento.adv@gmail.com', // Email desejado pelo cliente
  domain: 'bancario.psnascimento.adv.br', // Sem "www"
  phone: {
    ddd: '65',
    firstPart: '99951', // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: '3494', // Apenas os 4 últimos números
  },
  phoneSecundario: {
    ddd: 'A_Definir',
    firstPart: 'A_Definir', // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: 'A_Definir', // Apenas os 4 últimos números
  },
  phoneTerciario: {
    ddd: 'A_Definir',
    firstPart: 'A_Definir', // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: 'A_Definir', // Apenas os 4 últimos números
  },
  endereco: (
    <div>
      {/* <p>Endereço:</p> */}
      <p>Rua Bogotá, n° 63,</p>
      <p>Jardim das Américas,</p>
      <p>Cuiabá - MT,</p>
      <p>CEP: 78060-594</p>
    </div>
  ),
  enderecoSecundario: (
    <div>
      <p>Endereço:</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
    </div>
  ),
  expediente: (
    <div>
      <p>Segunda a sexta-feira:</p>
      <p>8h às 17h</p>
    </div>
  ),
  obs: <span className="italic">A Definir</span>,
  instagramProfile: 'nascimentoadvassociados', // Sem o @
  facebookProfile: '',
  linkeDinProfile: '',
  x: '',
  tiktokProfile: '',

  whatsappDefaultMessage:
    'Olá! Vim através do site de vocês e gostaria de tirar umas dúvidas.',
  whatsChatDefaultMessage:
    'Gostaria de falar conosco agora mesmo? Clque abaixo 👇',
  slogan: '',
}

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      solidLogo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      menuItems: [
        'Início',
        'Serviços',
        'Sobre',
        'Perguntas',
        // 'Blog',
        // 'Perguntas',
        // 'Mapa',
      ],
      menuId: ['home', 'feature', 'about', 'faq'],
      ariaLabel: 'Botão de Contato',
      ctaButtonText: 'Contato',
      ctaButtonTextResponsive: 'Contato',
    },
    hero: {
      miniTag: 'ESCRITÓRIO DE ADVOCACIA',
      title: (
        <h1>
          Dedicação e{' '}
          <span className="destaque relative italic font-light">
            excelência
            <span>
              <svg
                className="hero-underline absolute bottom-2 left-0 w-full h-3 text-accent/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
          </span>{' '}
          em serviços jurídicos
        </h1>
      ),
      subtitle: (
        <p>
          Nossos clientes enfrentam desafios complexos e saem vitoriosos,
          conquistando soluções justas e duradouras.
        </p>
      ),
      heroDefaultImage: heroDefaultImg, // img da pessoa mobile
      heroDefaulMobiletImg: heroDefaultMobileImg,
      alt: 'Imagem ilustrativa da Seção Início',
      ctaButtonAriaLabel:
        'Botão para chamada de ação para contato pelo whatsapp',
      ctaButtonText: 'Conquiste o sucesso conosco',
      ctaButtonTextSecondary: 'A_Definir',
      obsHero: {
        icon: <LucideIdCard />,
        iconTwo: <LucideIdCard />,
        text: 'Atendimento online ou presencial com hora marcada.',
        textTwo: '',
      },
      secondaryCta: 'Contato',
      images: {
        static: {
          img: {},
          alt: '',
        },
        slide1: {
          img: {},
          alt: '',
        },
        slide2: {
          img: {},
          alt: '',
        },
        slide3: {
          img: {},
          alt: '',
        },
      },
    },
    features: {
      miniTag: 'Áreas de Atuação',
      title: (
        <h1>
          Atuação Jurídica
          <span className="destaque italic font-light"> Especializada</span>
        </h1>
      ),
      subtitle:
        'Oferecemos assessoria e orientação jurídica, com foco na prevenção de riscos e na segurança das relações legais.',
      imgFeatures: imgFeatures,
      alt: 'imagem representativa da Seção Serviços',
      titleMessageFeature: '100%',
      subtitleMessageFeature: 'compromisso jurídico',
      cards: {
        card1: {
          title: 'Direito Bancário',
          subtitle: 'Evite abusos praticados pelos bancos.',
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
          icon: <CircleDollarSign />,
          buttonLabelModal: 'Fale Conosco',
          buttonLabel: 'Saiba Mais',
          link: 'https://lpa-paulo-nascimento-advogados.vercel.app/',
        },
        card2: {
          title: 'Direito Imobiliário',
          subtitle:
            'Transformando insegurança jurídica em patrimônio protegido.',
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
          icon: <Building />,
          buttonLabelModal: 'Fale Conosco',
          buttonLabel: 'Saiba Mais',
          link: 'https://lpa-direito-imobiliario-paulo.vercel.app/',
        },
        card3: {
          title: 'Direito Cível',
          subtitle:
            'As relações humanas estão cada vez mais complexas! Evite prejuízos ou desgastes desnecessários.',
          description: (
            <div>
              A_Definir <br />
              <br />
              A_Definir
            </div>
          ),
          icon: <Scale />,
          buttonLabelModal: 'Fale Conosco',
          buttonLabel: 'Saiba Mais',
          link: '',
        },
        card4: {
          title: 'Direito Sucessório',
          subtitle:
            'O inventário não precisa ser um peso. A solução pode ser mais rápida do que você imagina.',
          description: (
            <div>
              A_Definir
              <br />
              A_Definir
              <br />
            </div>
          ),
          icon: <Users />,
          buttonLabelModal: 'Fale Conosco',
          buttonLabel: 'Saiba Mais',
          link: 'https://lpa-secessao-paulo-nascimento.vercel.app/',
        },
        card5: {
          title: <p>A_Definir</p>,
          subtitle: 'A_Definir',
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
              <path d="M12 18V6" />
            </svg>
          ),
          buttonLabelModal: 'Fale Conosco',
          buttonLabel: 'Saiba Mais',
        },
        card6: {
          title: 'A_Definir',
          subtitle: 'A_Definir',
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
          icon: <Scale />,
          buttonLabelModal: 'Fale Conosco',
          buttonLabel: 'Saiba Mais',
        },
      },
      moreFeatures: {
        card1: {
          ico: 'A_Definir',
          title: 'A_Definir',
          subtitle: 'A_Definir',
        },
        card2: {
          ico: 'A_Definir',
          title: 'A_Definir',
          subtitle: 'A_Definir',
        },
        card3: {
          ico: 'A_Definir',
          title: 'A_Definir',
          subtitle: 'A_Definir',
        },
      },
    },
    maps: {
      minitag: 'A_Definir',
      title: 'A_Definir',
      subtitle: 'A_Definir',
      embedsrc: 'A_Definir',
    },
    about: {
      imagem: {
        img: aboutImg,
        alt: 'Imagem ilustrativa da Seção Sobre',
      },
      miniTag: 'QUEM É PAULO NASCIMENTO ADVOGADOS',
      title: (
        <h1>
          Nossa
          <span className="destaque italic font-light"> trajetória</span>
        </h1>
      ),
      SecondPartTitle: '',
      subtitle: 'Consultoria Jurídica Estratégica: Ética e Resultados.',
      paragraph: (
        <div>
          Com foco na defesa intransigente das prerrogativas e dos direitos,
          nossa prática jurídica é orientada pela busca de soluções eficazes que
          impactem positivamente a esfera jurídica de nossos clientes.
        </div>
      ),
      buttonModalLabelAbout: 'Continuar lendo',
      modal: (
        <p className="text-mutedForeground font-secondFont">
          Com foco na defesa intransigente das prerrogativas e dos direitos,
          nossa prática jurídica é orientada pela busca de soluções eficazes que
          impactem positivamente a esfera jurídica de nossos clientes.
          <br />
          <br />
          Estruturamos uma operação focada no atendimento individualizado,
          garantindo assistência técnica qualificada em todas as instâncias. A
          síntese entre o domínio doutrinário e a abordagem empática permite a
          entrega de pareceres e defesas com alto índice de assertividade.
          <br />
          <br />
          Mantemos um protocolo de atualização técnica rigoroso, assegurando que
          cada tese defendida esteja alinhada às mais recentes tendências dos
          tribunais superiores. O compromisso com a ética e a especialização
          técnica define nossa busca pela excelência na prestação de serviços.
        </p>
      ),
      paragraphModalCta: 'Entre em contato',
      titleModal: 'Nossa trajetória',
      ctaButtonAriaLabel: 'Botão para entrar em contato',
      ctaButtonText: 'Entre em contato',
      aboutSocial: {
        img: {
          img: aboutSocialImg,
          alt: `Foto do Instagram do ${infos.name}`,
          altDefault: 'Imagem ilustrativa da Seção de Redes Sociais',
        },
        miniTag: 'REDES SOCIAIS',
        title: 'Conecte-se conosco',
        subtitle:
          'Acompanhe nossas redes sociais e tenha acesso a conteúdos jurídicos que ajudam você a se proteger e decidir melhor.',
        paragraph: <p></p>,
        labelInstagram: 'Siga-nos no Instagram',
        labelFacebook: 'Siga-nos no Facebook',
        labelLinkedin: 'Siga-nos no LinkedIn',
        labelX: 'Siga-nos no X',
        labelTiktok: 'Siga-nos no Tik Tok',
        labelYoutube: 'Siga-nos no Youtube',
      },
    },
    // team: {
    //   miniTag: ' A_Definir',
    //   title: (
    //     <h1>
    //       A_Definir <span className="italic text-primaryDark">A_Definir</span>
    //       A_Definir
    //     </h1>
    //   ),
    //   subtitle: 'A_Definir',
    //   cards: {
    //     card1: {
    //       img1: team1,
    //       alt: 'Imagens ilustrativa dos profissionais',
    //       name: 'A_Definir',
    //       description: <p>A_Definir</p>,
    //     },
    //     card2: {
    //       img2: team2,
    //       alt: 'Imagens ilustrativa dos profissionais',
    //       name: 'A_Definir',
    //       description: <p>A_Definir</p>,
    //     },
    //   },
    // },
    steps: {
      miniTag: 'PASSO A PASSO',
      title: (
        <h1>
          Como
          <span className="destaque italic font-light"> funciona</span> nosso
          atendimento?
        </h1>
      ),
      subtitle: '',
      img: imgSteps,
      alt: 'Imagem ilustrativa da Seção Passo a Passo',
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: 'Contato inicial',
          cardDescription: (
            <p>
              Será realizado pelo WhatsApp como forma de agilizarmos o
              atendimento!
              <br />
              <br />
              Para entendermos melhor o seu caso, solicitamos resumo da situação
              pela qual está passando, o que poderá incluir o envio de
              documentos.
            </p>
          ),
        },
        card2: {
          stepNumber: 2,
          cardTitle: 'Análise detalhada',
          cardDescription:
            'Examinamos todos os aspectos do seu caso, revisando documentos e evidências para obter uma visão completa',
        },
        card3: {
          stepNumber: 3,
          cardTitle: 'Elaboração da estratégia',
          cardDescription:
            'Criamos uma estratégia jurídica personalizada para proteger seus interesses de maneira eficaz.',
        },
        card4: {
          stepNumber: 4,
          cardTitle: 'Ação legal',
          cardDescription:
            'Iniciamos e conduzimos as ações judiciais necessárias, buscando a justiça e a solução de que você precisa.',
        },
      },
    },
    ctaSecondary: {
      miniTag: 'FALE CONOSCO',
      title: (
        <h1>
          Enfrentando um problema jurídico? Deixe que cuidamos disso para você!
        </h1>
      ),
      subtitle:
        'Entre em contato agora para uma consulta especializada e comece a encontrar a solução que você precisa.',
      subtitleDireita: (
        <p className="gap-3 flex font-mainFont opacity-60 mt-1">
          <span>E N T R E </span> E M <span>C O N T A T O</span> V I A
        </p>
      ),
      titleDireita: (
        <h1 className="text-title5 my-3 font-mainFont">WhatsApp</h1>
      ),
      ctaButtonText: 'Falar agora',
      ctaButtonAriaLabel:
        'Botão para chamada de ação para contato pelo whatsapp',
    },
    // blog: {
    //   miniTag: 'BLOG',
    //   title: 'A_Definir',
    //   subtitle: '',
    //   img: imgSteps,
    //   labelCards: 'Ver mais',
    //   label: 'Clique aqui para ver todas as matérias',
    //   blogLink: 'mauromoncao.wordpress.com', //sem "https://"
    // },
    faq: {
      miniTag: 'TIRE SUAS DÚVIDAS',
      title: 'Perguntas Frequentes',
      subtitle: 'Confira as perguntas abaixo para esclarecer suas dúvidas.',
      questions: {
        question1: {
          question: 'Como posso contratar seus serviços?',
          answer:
            'Agende sua consulta conosco via WhatsApp e conversaremos sobre suas necessidades e avaliaremos os custos.',
        },
        question2: {
          question: 'Qual é o prazo médio para resolução de um caso?',
          answer:
            'O prazo médio varia conforme a complexidade, mas discutiremos uma estimativa durante a consulta inicial.',
        },
        question3: {
          question: 'Quais documentos devo levar para a consulta?',
          answer:
            'Traga os documentos relevantes ao seu caso, como contratos, correspondências e registros, além de documentos pessoais e comprovante de residência.',
        },
        question4: {
          question: 'Vocês oferecem serviços de consultoria preventiva?',
          answer:
            'Sim, oferecemos consultoria preventiva para evitar problemas futuros e garantir conformidade legal.',
        },
      },
      paragraph: 'Clique aqui caso tenha mais dúvidas',
    },
    // team: {
    //   miniTag: 'A_Definir',
    //   title: 'A_Definir',
    //   subtitle: 'A_Definir',
    //   members: {
    //     member1: {
    //       img: {
    //         alt: 'Edison Matos',
    //       },
    //       name: 'Edison Matos',
    //       role: 'CEO & Diretor de Desenvolvimento',
    //       description: '',
    //       socialMedia: {
    //         icon1: (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="20"
    //             height="20"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="black"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             class="lucide lucide-linkedin"
    //           >
    //             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    //             <rect width="4" height="12" x="2" y="9" />
    //             <circle cx="4" cy="4" r="2" />
    //           </svg>
    //         ),
    //         link1: 'https://www.linkedin.com/in/edison-matoss/',
    //         icon2: (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="20"
    //             height="20"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="black"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             class="lucide lucide-github"
    //           >
    //             <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    //             <path d="M9 18c-4.51 2-5-2-7-2" />
    //           </svg>
    //         ),
    //         link2: 'https://github.com/EdisonMatos',
    //         icon3: (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="20"
    //             height="20"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="black"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             class="lucide lucide-globe"
    //           >
    //             <circle cx="12" cy="12" r="10" />
    //             <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    //             <path d="M2 12h20" />
    //           </svg>
    //         ),
    //         link3: 'https://edisonmatos.github.io/',
    //       },
    //     },
    //     member2: {
    //       img: {
    //         img: teamMemberImg2,
    //         alt: 'Gabriel Adans',
    //       },
    //       name: 'Gabriel Adans',
    //       role: 'Marketing Outsourcing',
    //       socialMedia: {
    //         icon1: (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="20"
    //             height="20"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="black"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             class="lucide lucide-linkedin"
    //           >
    //             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    //             <rect width="4" height="12" x="2" y="9" />
    //             <circle cx="4" cy="4" r="2" />
    //           </svg>
    //         ),
    //         link1: 'https://www.linkedin.com/in/gabriel-adans-2bb029227/',
    //         icon2: (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="20"
    //             height="20"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="black"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             class="lucide lucide-github"
    //           >
    //             <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    //             <path d="M9 18c-4.51 2-5-2-7-2" />
    //           </svg>
    //         ),
    //         link2: 'https://github.com/GabrielAdans',
    //         icon3: (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="20"
    //             height="20"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="black"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             class="lucide lucide-instagram"
    //           >
    //             <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    //             <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    //             <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    //           </svg>
    //         ),
    //         link3: 'https://www.instagram.com/adansgabriel/',
    //       },
    //     },
    //     member3: {
    //       img: {
    //         img: teamMemberImg3,
    //         alt: 'Gabriel Souza',
    //       },
    //       name: 'Gabriel Souza',
    //       role: 'Desenvolvedor Frontend',
    //       socialMedia: {
    //         icon1: (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="20"
    //             height="20"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="black"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             class="lucide lucide-linkedin"
    //           >
    //             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    //             <rect width="4" height="12" x="2" y="9" />
    //             <circle cx="4" cy="4" r="2" />
    //           </svg>
    //         ),
    //         link1: ' https://www.linkedin.com/in/gabriel-souza-b9945929a',
    //         icon2: (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="20"
    //             height="20"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="black"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             class="lucide lucide-github"
    //           >
    //             <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    //             <path d="M9 18c-4.51 2-5-2-7-2" />
    //           </svg>
    //         ),
    //         link2: 'https://github.com/BiellSouza',
    //         icon3: (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="20"
    //             height="20"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="black"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             class="lucide lucide-instagram"
    //           >
    //             <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    //             <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    //             <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    //           </svg>
    //         ),
    //         link3: ' https://www.instagram.com/biel.souza.904',
    //       },
    //     },
    //     member4: {
    //       img: {
    //         img: teamMemberImg4,
    //         alt: 'Luiz Felipe',
    //       },
    //       name: 'Luiz Felipe',
    //       role: 'Designer Ourtsourcing',
    //       socialMedia: {
    //         icon1: (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="20"
    //             height="20"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="black"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             class="lucide lucide-linkedin"
    //           >
    //             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    //             <rect width="4" height="12" x="2" y="9" />
    //             <circle cx="4" cy="4" r="2" />
    //           </svg>
    //         ),
    //         link1: 'https://www.linkedin.com/in/luiz-felipe-leite-95a246192/',
    //         icon2: (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="20"
    //             height="20"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="black"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             class="lucide lucide-instagram"
    //           >
    //             <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    //             <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    //             <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    //           </svg>
    //         ),
    //         link2: 'https://www.instagram.com/luizleitedesigner/',
    //         icon3: (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="20"
    //             height="18"
    //             fill="black"
    //             className=" bi bi-whatsapp"
    //             viewBox="0 0 16 16"
    //           >
    //             <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    //           </svg>
    //         ),
    //         link3: 'https://wa.me/+556596241854',
    //       },
    //     },
    //   },
    // },
    footer: {
      copyrightLine: ` ${currentYear} - ${infos.name} - Todos os direitos reservados`,
      footerDivulgacaoText: 'Gostaria de ter um site como este? Clique aqui',
      midSectionName: 'Até mais',
      footerText:
        'Agradecemos sua visita! Esperamos que em breve você se torne nosso cliente e desfrute de todos os benefícios que oferecemos.',
      footerSocialText: 'Siga a gente nas redes sociais:',
      footerNavegacaoText: 'NAVEGAÇÃO',
      desenvolvidoPor: 'Desenvolvido com excelência por Paper Street',
      privacidade: (
        <div class="phone3:max-w-3xl mx-auto tablet1:px-6 text-gray-900 leading-relaxed font-secondFont">
          <h1 class="text-3xl font-bold mb-6">Política de Privacidade</h1>

          <h2 class="text-xl font-semibold mb-3">Informações Importantes</h2>

          <p class="mb-4">
            Esta Política de Privacidade descreve como coletamos, utilizamos,
            armazenamos e compartilhamos informações pessoais de usuários de
            nossos serviços, em conformidade com a Lei Geral de Proteção de
            Dados (LGPD) - Lei nº 13.709/2018.
          </p>

          <p class="mb-4">
            Nos comprometemos a proteger a privacidade e os dados pessoais de
            todos os usuários, garantindo transparência e segurança em todas as
            etapas de tratamento.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Definições</h2>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>
              <strong>Autoridade Nacional de Proteção de Dados (ANPD):</strong>{' '}
              órgão responsável pela fiscalização e aplicação da LGPD.
            </li>

            <li>
              <strong>Base Legal:</strong> fundamento jurídico que autoriza o
              tratamento de dados pessoais (como consentimento, execução de
              contrato, obrigação legal ou legítimo interesse).
            </li>

            <li>
              <strong>Consentimento:</strong> manifestação livre e informada do
              titular que autoriza o tratamento de seus dados pessoais para uma
              finalidade específica.
            </li>

            <li>
              <strong>Dado Pessoal:</strong> qualquer informação que identifique
              ou possa identificar uma pessoa natural (ex.: nome, CPF, e-mail,
              telefone, IP, localização, etc.).
            </li>

            <li>
              <strong>Dado Pessoal Sensível:</strong> dado que revele origem
              racial, convicção religiosa, opinião política, dado referente à
              saúde, vida sexual, dado genético ou biométrico.
            </li>

            <li>
              <strong>Titular:</strong> pessoa natural a quem se referem os
              dados pessoais tratados.
            </li>

            <li>
              <strong>Tratamento:</strong> qualquer operação realizada com dados
              pessoais, como coleta, armazenamento, uso, compartilhamento ou
              exclusão.
            </li>

            <li>
              <strong>Legítimo Interesse:</strong> quando o tratamento é
              necessário para atender a interesses legítimos do controlador, sem
              ferir direitos e liberdades fundamentais do titular.
            </li>

            <li>
              <strong>Segurança:</strong> medidas técnicas e administrativas
              adotadas para proteger os dados de acessos não autorizados,
              vazamentos ou destruição acidental.
            </li>
          </ul>

          <p class="mb-4">
            <strong>Transparência:</strong> direito do titular de receber
            informações claras e acessíveis sobre o uso de seus dados.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Direitos dos Titulares</h2>

          <p class="mb-3">Os titulares de dados pessoais têm direito a:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>Confirmar se seus dados são tratados;</li>
            <li>
              Acessar, corrigir, atualizar ou solicitar a exclusão de seus
              dados;
            </li>
            <li>Revogar o consentimento a qualquer momento;</li>
            <li>Solicitar portabilidade ou anonimização dos dados;</li>
            <li>Opor-se ao tratamento quando considerar irregular.</li>
          </ul>

          <p class="mb-4">
            As solicitações podem ser feitas por meio dos canais de contato
            disponibilizados pela empresa.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Coleta e Uso de Dados Pessoais
          </h2>

          <p class="mb-3">Podemos coletar dados pessoais por meio de:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>
              Formulários de contato e cadastro (nome, e-mail, telefone,
              endereço, CPF, entre outros);
            </li>
            <li>
              Navegação no site, incluindo endereço IP, localização geográfica,
              tipo de navegador, sistema operacional e tempo de visita;
            </li>
            <li>
              Transações financeiras, quando houver compra de produtos ou
              contratação de serviços;
            </li>
            <li>
              Interações com o suporte ou atendimento, para aprimorar a
              experiência do usuário e a qualidade do serviço.
            </li>
          </ul>

          <p class="mb-3">Esses dados são utilizados para:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>Operar, manter e melhorar nossos serviços;</li>
            <li>Personalizar a experiência do usuário;</li>
            <li>Cumprir obrigações legais e contratuais;</li>
            <li>
              Realizar comunicações e campanhas de marketing, mediante
              consentimento;
            </li>
            <li>
              Garantir segurança, prevenção a fraudes e cumprimento de
              exigências legais.
            </li>
          </ul>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Cookies e Tecnologias de Rastreamento
          </h2>

          <p class="mb-4">
            Nosso site pode utilizar cookies e tecnologias semelhantes para
            melhorar a navegação e compreender como os usuários interagem com o
            conteúdo. O uso de cookies não estritamente necessários dependerá do
            consentimento do usuário, que poderá ser configurado ou revogado a
            qualquer momento em seu navegador.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Compartilhamento e Transferência de Dados
          </h2>

          <p class="mb-3">Podemos compartilhar dados pessoais com:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>
              Parceiros e prestadores de serviço, que auxiliam na operação
              técnica, hospedagem, marketing ou suporte;
            </li>
            <li>Autoridades públicas, quando houver obrigação legal;</li>
            <li>Instituições financeiras, em transações de pagamento.</li>
          </ul>

          <p class="mb-4">
            Em caso de transferência internacional de dados, serão adotadas
            medidas para garantir que o tratamento esteja em conformidade com a
            LGPD e com níveis adequados de proteção.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Armazenamento e Retenção dos Dados
          </h2>

          <p class="mb-4">
            Os dados pessoais são armazenados apenas pelo tempo necessário para
            cumprir as finalidades para as quais foram coletados ou conforme
            exigido por lei. Após o período de retenção, os dados são eliminados
            de forma segura, respeitando normas técnicas e regulatórias.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Segurança da Informação</h2>

          <p class="mb-4">
            Adotamos medidas técnicas, físicas e administrativas adequadas para
            proteger os dados pessoais contra acesso não autorizado, perda,
            alteração, destruição ou divulgação indevida. Embora nenhuma medida
            seja totalmente infalível, buscamos constantemente aprimorar nossas
            práticas de segurança.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Alterações nesta Política</h2>

          <p class="mb-4">
            Esta Política de Privacidade poderá ser atualizada periodicamente,
            conforme alterações legais ou melhorias em nossos processos.
            Recomendamos que o usuário revise este documento regularmente para
            manter-se informado sobre como protegemos suas informações.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Contato</h2>

          <p>
            Em caso de dúvidas, solicitações ou exercício de direitos
            relacionados a dados pessoais, entre em contato pelo canal de
            comunicação indicado no site.
          </p>
        </div>
      ),
      pontos: {
        ponto1: 'Profissionalismo',
        ponto2: 'Experiência',
        ponto3: 'Resultados',
      },
    },
    // socios: {
    //   socio1: {
    //     nome: 'A_Definir',
    //     rota: 'A_Definir',
    //     sobrenome: '',
    //     telefone: 'A_Definir',
    //     whatsapp: 'A_Definir',
    //     email: '',
    //     social: {
    //       instagram: '',
    //       facebook: '',
    //       linkedin: '',
    //       x: '',
    //       tiktok: '',
    //     },
    //   },
    //   socio2: {
    //     nome: 'A_Definir',
    //     rota: 'A_Definir',
    //     sobrenome: '',
    //     telefone: '00000000000',
    //     whatsapp: '00000000000',
    //     email: '',
    //     social: {
    //       instagram: '',
    //       facebook: '',
    //       linkedin: '',
    //       x: '',
    //       tiktok: '',
    //     },
    //   },
    //   socio4: {
    //     nome: 'A_Definir',
    //     rota: 'A_Definir',
    //     sobrenome: '',
    //     telefone: 'A_Definir',
    //     whatsapp: 'A_Definir',
    //     email: '',
    //     social: {
    //       instagram: '',
    //       facebook: '',
    //       linkedin: '',
    //       x: '',
    //       tiktok: '',
    //     },
    //   },
    // },
    links: {
      instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
      ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
      phoneSecundario: `https://wa.me/+55${infos.phoneSecundario.ddd}${infos.phoneSecundario.firstPart}${infos.phoneSecundario.secondPart}?text=${infos.whatsappDefaultMessage}`,
      phoneTerciario: `https://wa.me/+55${infos.phoneTerciario.ddd}${infos.phoneTerciario.firstPart}${infos.phoneTerciario.secondPart}?text=${infos.whatsappDefaultMessage}`,
      facebook: `https://www.facebook.com/${infos.facebookProfile}`,
      x: `https://x.com/${infos.x}`,
      linkedin: `https://www.linkedin.com/in/${infos.linkeDinProfile}`,
      tiktok: `https://www.tiktok.com/@${infos.tiktokProfile}/`,
    },
    infos: {
      phone: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
      phoneSecundario: `(${infos.phoneSecundario.ddd}) ${infos.phoneSecundario.firstPart}-${infos.phoneSecundario.secondPart}`,
      phoneTerciario: `(${infos.phoneTerciario.ddd}) ${infos.phoneTerciario.firstPart}-${infos.phoneTerciario.secondPart}`,
      email: `${infos.email}@${infos.domain}`,
      emailSecundario: `${infos.emailSecundario}`,
      adress: infos.endereco,
      adressSecundario: infos.enderecoSecundario,
      officeHours: infos.expediente,
      year: currentYear,
      footerexpediente: infos.expediente,
      obsFooter: infos.obs,
      footerNavegacaoText: 'NAVEGAÇÃO',
      footerDivulgacaoText: 'Gostaria de ter um site como este? Clique aqui',
    },
  },
}

export const abstractions = {
  titleModal: <strong>{content.texts.about.title}</strong>,
  subtitleModal: <strong>{content.texts.about.subtitle}</strong>,
}

export default content
