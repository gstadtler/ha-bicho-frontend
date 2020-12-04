import React from 'react';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './styles.css';

function TermosCompromisso() {

  return (
    <div className="termos-uso">
      <Container className="mt-5">
        <h1 style={{textAlign: "center"}}>Termos e condições gerais de uso do site</h1>
        <h5 style={{color: "#333366", textAlign: "center"}}>
          *Atenção, alguns dados contidos nestes termos são fictícios e simbólicos
        </h5>
        <Row>
          <Col>
            <p style={{margin: "30px 0", fontSize: "18px"}}>
              Estes termos e condições gerais de uso aplicam-se aos serviços prestados pela
              pessoa jurídica Habicho LTDA, devidamente registrada
              sob o CNPJ n. 49.057.598/0001-66 , e-mail:silvano_adm@habicho.com , com sede em:
              Rua Alfredo Martins, nº 123 Casa Amarela, Recife, Pernambuco CEP: 50123 - 082
              representada por: Silvano Camargo Nogueira, na qualidade de: Coordenador, CPF n. 299.061.680-21,
              Carteira de Identidade (RG) n. 28.656.199-2, expedida SDS-PE doravante denominado EDITOR DO SITE,
              por meio do site Ha-bicho, com o seguinte endereço:
              https://ha-bicho-app.herokuapp.com.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <ListGroup>
              <h5>
                I. DO OBJETO
              </h5>
              <ListGroupItem className="content">
                <p style={{fontWeight: "bold"}}>
                  O site Ha-bicho caracteriza-se pela prestação dos seguintes serviços:
                </p>
                <p style={{marginBottom: "5px"}}>
                  - Servir como mediador entre os pessoas doadoras, e os abrigos e protetores de animais
                  abandonados.
                </p>
                <p style={{marginBottom: "5px"}}>
                  - Oferecer descontos com empresas e lojas parceiras para alguns doadores (sujeito à
                  disponibilidade).
                </p>
                <p style={{marginBottom: "5px"}}>
                  - Facilitar o processo de doação e aumentar a visibilidade dos abrigos, como forma de atrair mais
                  doadores, e, por conseguinte melhorar a situação dos animais abandonados no país.
                </p>  
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
        
      <Container>
        <Row>
          <Col>
            <ListGroup>
              <h5>
                II. DA ACEITAÇÃO DOS TERMOS E CONDIÇÕES GERAIS DE USO
              </h5>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px"}}>
                  Todos aqueles que desejarem ter acesso aos serviços ofertados através do site Ha-bicho deverão,
                  primeiramente, se informar sobre as regras que compõem o presente instrumento, as quais ficarão
                  disponíveis para pronta e ampla consulta, em link direto no próprio site.
                  Ao utilizar o site Ha-bicho, o usuário aceita integralmente as presentes normas e compromete-se a
                  observá-las, sob risco de aplicação das penalidades cabíveis. Antes de iniciar qualquer navegação
                  no site, o usuário deverá cientificar-se de eventuais modificações ou atualizações ocorridas neste
                  termos.
                </p>
                <p style={{marginBottom: "5px"}}>
                  O usuário poderá ainda ser avisado por e-mail ou diretamente no próprio site sobre eventuais
                  mudanças nas presentes normas. Caso não concorde com quaisquer das regras aqui descritas, o usuário deve, 
                  imediatamente, absterse de utilizar o serviço. Se for de seu interesse, poderá, ainda, 
                  entrar em contato com o serviço de atendimento ao cliente, para apresentar-lhe as suas ressalvas.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
        
      <Container>
        <Row>
          <Col>
            <ListGroup>
              <h5>
                III. DA NAVEGAÇÃO
              </h5>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px"}}>
                  O editor do site Ha-bicho se compromete a utilizar todas as soluções técnicas à sua disposição para
                  permitir o acesso ao serviço 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana. Entretanto,
                  ele poderá, a qualquer momento, interromper, limitar ou suspender o acesso ao site ou a algumas de
                  suas páginas, a fim de realizar atualizações, modificações de conteúdo ou qualquer outra ação
                  julgada necessária para o seu bom funcionamento.
                </p>
                <p style={{marginBottom: "5px"}}>
                  Os presentes termos e condições gerais de uso 
                  se aplicam a todas as extensões do site Ha-bicho em redes sociais ou em comunidades, tanto as já existentes, 
                  quanto aquelas ainda a serem implementadas.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
        
      <Container>
        <Row>
          <Col>
            <ListGroup>
              <h5>
                IV. DA GESTÃO DO SITE
              </h5>
              <ListGroupItem className="content">
                <p style={{fontWeight: "bold"}}>
                  Para a boa gestão, o editor do site Ha-bicho poderá, a qualquer momento:
                </p>
                <p style={{marginBottom: "5px"}}>
                  a) suspender, interromper ou limitar o acesso a todo ou a parte do site a uma categoria específica de
                  internautas;
                </p>
                <p style={{marginBottom: "5px"}}>
                  b) remover toda informação que possa perturbar o funcionamento do site ou que esteja em conflito
                  com normas de Direito brasileiro ou de Direito internacional;
                </p>
                <p style={{marginBottom: "5px"}}>
                  c) suspender o site, a fim de realizar atualizações e modificações.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
        
      <Container>
        <Row>
          <Col>
            <ListGroup>
              <h5>
                V. DO CADASTRO
              </h5>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px"}}>
                  Os serviços disponibilizados no site Ha-bicho apenas poderão ser acessados por pessoas
                  plenamente capazes, conforme o Direito brasileiro. Todos aqueles que não possuírem plena
                  capacidade civil - menores de 18 anos não emancipados, pródigos, ébrios habituais ou viciados em
                  tóxicos e pessoas que não puderem exprimir sua vontade, por motivo transitório ou permanente -
                  deverão ser devidamente assistidos por seus representantes legais, que se responsabilizarão pelo
                  cumprimento das presentes regras.
                </p>
                <p style={{marginBottom: "5px"}}>
                  Ao usuário, será permitido manter apenas uma conta junto ao site Ha-bicho. Contas duplicadas
                  serão automaticamente desativadas pelo editor do site, sem prejuízo de demais penalidades cabíveis.
                  Para o devido cadastramento junto ao serviço, o usuário deverá fornecer integralmente os dados
                  requeridos. Todas as informações fornecidas pelo usuário devem ser precisas, verdadeiras e
                  atualizadas. Em qualquer caso, o usuário responderá, em âmbito cível e criminal, pela veracidade,
                  exatidão e autenticidade dos dados informados.
                </p>
                <p style={{marginBottom: "5px"}}>
                  O usuário deverá fornecer um endereço de e-mail válido, através do qual o site realizará todos os
                  contatos necessários. Todas as comunicações enviadas para o referido endereço serão consideradas
                  lidas pelo usuário, que se compromete, assim, a consultar regularmente suas mensagens recebidas e
                  a respondê-las em prazo razoável.
                </p>
                <p style={{marginBottom: "5px"}}>
                  Após a confirmação de seu cadastro, o usuário possuirá um login (apelido) e uma senha pessoais,
                  que deverão ser por ele utilizados para o acesso a sua conta no site Ha-bicho. Estes dados de
                  conexão não poderão ser informados pelo usuário a terceiros, sendo de sua inteira responsabilidade
                  o uso que deles seja feito. O usuário compromete-se a comunicar imediatamente ao editor do site
                  quaisquer atividades suspeitas ou inesperadas em sua conta.
                </p>
                <p style={{marginBottom: "5px"}}>
                  Não será permitido ceder, vender, alugar ou transferir, de qualquer forma, a conta, que é pessoal e
                  intransferível.
                </p>
                <p style={{marginBottom: "5px"}}>
                  Será automaticamente descadastrado o usuário que descumprir quaisquer das normas contidas no
                  presente instrumento, sendo-lhe vedado realizar nova inscrição no site.
                  O usuário poderá, a qualquer tempo e sem necessidade de justificação, requerer o cancelamento de
                  seu cadastro junto ao site Ha-bicho. O seu descadastramento será realizado o mais rapidamente
                  possível, desde que não sejam verificados débitos em aberto.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
        
      <Container>
        <Row>
          <Col>
            <ListGroup>
              <h5>
                VI. DAS RESPONSABILIDADES
              </h5>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px"}}>
                  O editor se responsabilizará pelos defeitos ou vícios encontrados nos serviços prestados pelo site
                  Ha-bicho, desde que tenha lhes dado causa. Defeitos ou vícios técnicos ou operacionais originados
                  no próprio sistema do usuário não serão de responsabilidade do editor.
                </p>
                <p style={{marginBottom: "5px"}}>
                  O editor responsabiliza-se apenas pelas informações que foram por ele diretamente divulgadas.
                  Quaisquer informações incluídas pelos usuários, tais como em comentários e em perfis pessoais,
                  serão de inteira responsabilidade dos próprios.
                </p>
                <p style={{marginBottom: "5px", fontWeight: "bold"}}>
                  O usuário é responsável, ainda:
                </p>
                <p style={{marginBottom: "5px", marginLeft: "10px"}}>
                  a) pela correta utilização do site e de seus serviços, prezando pela boa convivência, pelo respeito e
                  pela cordialidade no relacionamento com os demais usuários;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "10px"}}>
                  b) pelo cumprimento das regras contidas neste instrumento, bem como normas de Direito nacional e
                  de Direito internacional;
                </p>
                <p style={{marginBottom: "10px", marginLeft: "10px"}}>
                  c) pela proteção dos dados de acesso à sua conta (login e senha).
                </p>
                <p style={{marginBottom: "5px", fontWeight: "bold"}}>
                  O editor não será responsável:
                </p>
                <p style={{marginBottom: "5px", marginLeft: "10px"}}>
                  a) pelas características intrínsecas da internet, principalmente relativas à confiabilidade e à
                  procedência das informações circulando nesta rede;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "10px"}}>
                  b) pelos conteúdos ou atividades ilícitas praticadas através de seu site.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
        
      <Container>
        <Row>
          <Col>
            <ListGroup>
              <h5>
                VII. DOS LINKS EXTERNOS
              </h5>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px"}}>
                  O site Ha-bicho pode conter links externos redirecionando o usuário para outras páginas da
                  internet, sobre os quais o editor não exerce controle. Apesar das verificações prévias e regulares
                  realizadas pelo editor, ele se isenta de qualquer responsabilidade sobre o conteúdo encontrado
                  nestes sites e serviços.
                </p>
                <p style={{marginBottom: "5px"}}>
                  Poderão ser incluídos links nas páginas e nos documentos do site Ha-bicho, desde que não sirvam
                  para fins comerciais ou publicitários. Esta inclusão dependerá de autorização prévia do editor.
                  Não será autorizada a inclusão de páginas que divulguem quaisquer tipos de informações ilícitas,
                  violentas, polêmicas, pornográficas, xenofóbicas, discriminatórias ou ofensivas.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
        
      <Container>
        <Row>
          <Col>
            <ListGroup>
              <h5>
                VIII. DOS DIREITOS AUTORAIS
              </h5>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px"}}>
                  A estrutura do site Ha-bicho, bem como os textos, os gráficos, as imagens, as fotografias, os sons,
                  os vídeos e as demais aplicações informáticas que o compõem são de propriedade do editor e são
                  protegidas pela legislação brasileira e internacional referente à propriedade intelectual.
                </p>
                <p style={{marginBottom: "5px"}}>
                  Qualquer representação, reprodução, adaptação ou exploração parcial ou total dos conteúdos,
                  marcas e serviços propostos pelo site, por qualquer meio que seja, sem autorização prévia, expressa
                  e escrita do editor, é estritamente vedada, podendo-se recorrer às medidas cíveis e penais cabíveis.
                  Estão excluídos desta previsão apenas os elementos que estejam expressamente designados no site
                  como livres de direitos autorais.
                </p>
                <p style={{marginBottom: "5px"}}>
                  O acesso não gera para o usuário qualquer direito de propriedade intelectual relativo a elementos do
                  site, os quais restam sob a propriedade exclusiva do editor.
                  É vedado ao usuário incluir no site dados que possam modificar o seu conteúdo ou sua aparência.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <ListGroup>
              <h5>
                IX. DA POLÍTICA DE PRIVACIDADE
              </h5>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px", fontWeight: "bold"}}>
                  1. Informações gerais
                </p>
                <p style={{marginBottom: "5px", marginLeft: "10px"}}>
                  Essa seção contém informações a respeito do tratamento de dados pessoais do usuário, total ou
                  parcialmente, automatizados ou não, realizado pelo site e que poderão ou não serem armazenados.
                  O objetivo é fornecer orientações a respeito das informações coletadas, os motivos da coleta e como
                  o usuário poderá atualizar, gerenciar, exportar ou excluir essas informações.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "10px"}}>
                  A política de privacidade do site está de acordo com a Lei federal n. 12.965 de 23 de abril de 2014
                  (Marco Civil da Internet), com a Lei federal n. 13.709, de 14 de agosto de 2018 (Lei de Proteção de
                  Dados Pessoais) e com o Regulamento UE n. 2016/679 de 27 de abril de 2016 (Regulamento Geral
                  Europeu de Proteção de Dados Pessoais).
                </p>
                <p style={{marginBottom: "5px", marginLeft: "10px"}}>
                  Esta política de privacidade poderá ser atualizada em decorrência de uma eventual atualização
                  normativa, razão pela qual se convida o usuário a consultar periodicamente esta seção.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px", fontWeight: "bold"}}>
                  2. Direitos do usuário
                </p>
                <p style={{marginBottom: "5px", marginLeft: "10px", fontWeight: "bold"}}>
                  O site se compromete a cumprir as normas dispostas pelo Regulamento Geral Europeu de
                  Proteção de Dados Pessoais (RGPD), em respeito aos seguintes princípios:
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Seus dados pessoais serão processados de forma lícita, leal e transparente (licitude, lealdade
                  e transparência);
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Seus dados pessoais serão coletados apenas para finalidades determinadas, explícitas e
                  legítimas, não podendo ser tratados posteriormente de uma forma incompatível com essas
                  finalidades (limitação das finalidades);
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Seus dados pessoais serão coletados de forma adequada, pertinente e limitada às
                  necessidades do objetivo para os quais eles são processados (minimização dos dados);
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Seus dados pessoais serão exatos e atualizados sempre que necessário, de maneira que os
                  dados inexatos sejam apagados ou retificados quando possível (exatidão);
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Seus dados pessoais serão conservados de uma forma que permita a identificação dos
                  titulares dos dados apenas durante o período necessário para as finalidades para as quais são
                  tratados (limitação da conservação);
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Seus dados pessoais serão tratados de forma segura, protegidos do tratamento não autorizado
                  ou ilícito e contra a sua perda, destruição ou danificação acidental, adotando as medidas
                  técnicas ou organizativas adequadas (integridade e confidencialidade).
                </p>
                <p style={{marginBottom: "5px", marginLeft: "10px", fontWeight: "bold"}}>
                  O usuário do site possui os seguintes direitos, conferidos pela Lei federal n. 13.709, de 14 de
                  agosto de 2018 (Lei de Proteção de Dados Pessoais) e pelo Regulamento Geral Europeu de
                  Proteção de Dados Pessoais (RGPD):
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Direito de confirmação e acesso: é o direito do usuário de obter do site a confirmação de que
                  os dados pessoais que lhe digam respeito são ou não objeto de tratamento e, se for esse o
                  caso, o direito de acessar os seus dados pessoais;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Direito de retificação: é o direito do usuário de obter do site, sem demora injustificada, a
                  retificação dos dados pessoais inexatos que lhe digam respeito;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Direito à eliminação dos dados (direito ao esquecimento): é o direito do usuário de ter seus
                  dados apagados do site;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Direito à limitação do tratamento dos dados: é o direito do usuário de limitar o tratamento de
                  seus dados pessoais, podendo obtê-la quando contesta a exatidão dos dados, quando o
                  tratamento for ilícito, quando o site não precisar mais dos dados para as finalidades
                  propostas e quando tiver se oposto ao tratamento dos dados e em caso de tratamento de
                  dados desnecessários;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Direito de oposição: é o direito do usuário de, a qualquer momento, se opor por motivos
                  relacionados com a sua situação particular, ao tratamento dos dados pessoais que lhe digam
                  respeito, podendo se opor ainda ao uso de seus dados pessoais para definição de perfil de
                  marketing (profiling);
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Direito de portabilidade dos dados: é o direito do usuário de receber os dados pessoais que
                  lhe digam respeito e que tenha fornecido ao site, num formato estruturado, de uso corrente e
                  de leitura automática, e o direito de transmitir esses dados a outro site;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Direito de não ser submetido a decisões automatizadas: é o direito do usuário de não ficar
                  sujeito a nenhuma decisão tomada exclusivamente com base no tratamento automatizado,
                  incluindo a definição de perfis (profiling), que produza efeitos na sua esfera jurídica ou que
                  o afete significativamente de forma similar.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "10px", fontWeight: "bold"}}>
                  O usuário poderá exercer os seus direitos por meio de comunicação escrita enviada ao site
                  com o assunto "RGDP- http://ha-bicho-app.herokuapp.com/ ", especificando:
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Nome completo ou razão social, número do CPF (Cadastro de Pessoas Físicas, da Receita
                  Federal do Brasil) ou CNPJ (Cadastro Nacional de Pessoa Jurídica, da Receita Federal do
                  Brasil) e endereço de e-mail do usuário e, se for o caso, do seu representante;
                  • Direito que deseja exercer junto ao site;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Data do pedido e assinatura do usuário;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  • Todo documento que possa demonstrar ou justificar o exercício de seu direito.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "10px", fontWeight: "bold"}}>
                  O pedido deverá ser enviado ao e-mail: dados_pessoais@habicho.com , ou por correio, ao
                  seguinte endereço:
                </p>
                <p style={{marginBottom: "5px", marginLeft: "30px"}}>
                  Rua General Oliveira, nº 876 , Apipucos, Recife, Pernambuco CEP: 50765-812
                  O usuário será informado em caso de retificação ou eliminação dos seus dados.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px", fontWeight: "bold"}}>
                  3. Informações coletadas
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px", fontWeight: "bold"}}>
                  3.1. Tipo de dados coletados
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  Os dados pessoais coletados pelo site serão aqueles necessários à identificação do usuário, bem
                  como os dados sensíveis do usuário, nos termos dos artigos 9º e 10 do Regulamento Geral Europeu
                  de Proteção de Dados Pessoais (RGPD) e do artigo 11 da Lei federal n. 13.709, de 14 de agosto de
                  2018.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  Entende-se por dados sensíveis os dados pessoais que revelem a origem racial ou étnica, as opiniões
                  políticas, as convicções religiosas ou filosóficas, ou a filiação sindical, bem como o tratamento de
                  dados genéticos, dados biométricos para identificar uma pessoa de forma inequívoca, dados
                  relativos à saúde ou dados relativos à vida sexual ou orientação sexual de uma pessoa. Também são
                  classificados como dados sensíveis os dados pessoais relacionados com condenações penais e
                  infrações ou com medidas de segurança conexas.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  Serão coletados todos os dados necessários ao cadastro do usuário, como nome completo ou razão
                  social, número do CPF ou CNPJ, e-mail e endereço do usuário, requisitos necessários para acessar
                  determinados serviços oferecidos pelo site.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  Eventualmente poderão ser coletados outras categorias de dados, desde que fornecidos com o
                  consentimento do usuário, ou ainda em razão de interesse legítimo ou demais motivos permitidos
                  em lei.
                  O usuário se compromete a fornecer exclusivamente os seus dados pessoais e não os de terceiros.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px", fontWeight: "bold"}}>
                  3.2. Fundamento jurídico para o tratamento dos dados pessoais
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  Ao utilizar os serviços site, o usuário está consentindo com o presente termo e com a sua política de
                  privacidade.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  O usuário tem o direito de retirar o seu consentimento a qualquer momento, não comprometendo a
                  licitude dos dados pessoais tratados antes de sua retirada. A retirada do consentimento poderá ser
                  feita pelo e-mail: dados_pessoais@habicho.com , ou por correio enviado ao seguinte endereço:
                </p>
                <p style={{marginBottom: "5px", marginLeft: "50px"}}>
                  Rua General Oliveira, nº 876 , Apipucos, Recife, Pernambuco CEP: 50765-812
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  O usuário será informado em caso de retificação ou eliminação dos seus dados.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  O consentimento dos relativamente ou absolutamente incapazes, especialmente de crianças menores
                  de 16 (dezesseis) anos, apenas poderá ser feito, respectivamente, se devidamente assistidos ou
                  representados.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px", fontWeight: "bold"}}>
                  O tratamento de dados pessoais sem o consentimento do usuário apenas será realizado em razão de
                  interesse legítimo ou para as hipóteses previstas em lei, dentre outras, as seguintes:
                </p>
                <p style={{marginBottom: "5px", marginLeft: "60px"}}>
                  • para o cumprimento de obrigação legal ou regulatória pelo controlador;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "60px"}}>
                  • para a realização de estudos por órgão de pesquisa, garantida, sempre que possível, a
                  anonimização dos dados pessoais;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "60px"}}>
                  • quando necessário para a execução de contrato ou de procedimentos preliminares
                  relacionados a contrato do qual seja parte o usuário, a pedido do titular dos dados;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "60px"}}>
                  • para o exercício regular de direitos em processo judicial, administrativo ou arbitral, esse
                  último nos termos da Lei nº 9.307, de 23 de setembro de 1996 (Lei de Arbitragem);
                </p>
                <p style={{marginBottom: "5px", marginLeft: "60px"}}>
                  • para a proteção da vida ou da incolumidade física do titular dos dados ou de terceiro;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "60px"}}>
                  • para a tutela da saúde, em procedimento realizado por profissionais da área da saúde ou por
                  entidades sanitárias;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "60px"}}>
                  • quando necessário para atender aos interesses legítimos do controlador ou de terceiro, exceto
                  no caso de prevalecerem direitos e liberdades fundamentais do titular dos dados que exijam
                  a proteção dos dados pessoais;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "60px"}}>
                  • para a proteção do crédito, inclusive quanto ao disposto na legislação pertinente.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px", fontWeight: "bold"}}>
                  3.3. Finalidades do tratamento dos dados pessoais
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  Os dados pessoas do usuário coletados pelo site têm por finalidade facilitar, agilizar e cumprir os
                  compromissos estabelecidos com o usuário e a fazer cumprir as solicitações realizadas por meio do
                  preenchimento de formulários.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  Os dados pessoais poderão ser utilizados também com uma finalidade comercial, para personalizar
                  o conteúdo oferecido ao usuário, bem como para dar subsídio ao site para a melhora da qualidade e
                  funcionamento de seus serviços.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  O site recolhe os dados do usuário para que seja realizado definição de perfis (profiling), ou seja,
                  tratamento automatizado de dados pessoais que consista em utilizar esses dados para avaliar certos
                  aspetos pessoais do usuário, principalmente para analisar ou prever aspectos relacionados com o seu
                  desempenho profissional, a sua situação econômica, saúde, preferências pessoais, interesses,
                  fiabilidade, comportamento, localização ou deslocamentos.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  Os dados de cadastro serão utilizados para permitir o acesso ao usuário de determinados conteúdos
                  do site exclusivos para usuários cadastrados.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  Se o site tiver a intenção de tratar os dados pessoais do usuário para outras finalidades ele deverá ser
                  informado sobre as outras finalidades, que deverão ser feitas em observação aos mesmos direitos e
                  obrigações.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px", fontWeight: "bold"}}>
                  3.4. Prazo de conservação dos dados pessoais
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  Os dados pessoais do usuário serão conservados por um período não superior ao exigido para
                  cumprir os objetivos em razão dos quais eles são processados.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  O período de conservação dos dados são definidos de acordo com os seguintes critérios:
                  A Ha-bicho reserva-se ao direito de manter os dados armazenados pelo tempo necessário para a
                  prestação dos serviços.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px", fontWeight: "bold"}}>
                  Os dados pessoais dos usuários apenas poderão ser conservados após o término de seu tratamento
                  nas seguintes hipóteses:
                </p>
                <p style={{marginBottom: "5px", marginLeft: "60px"}}>
                  • para o cumprimento de obrigação legal ou regulatória pelo controlador;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "60px"}}>
                  • para estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos
                  dados pessoais;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "60px"}}>
                  • para a transferência a terceiro, desde que respeitados os requisitos de tratamento de dados
                  dispostos na legislação;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "60px"}}>
                  • para uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados
                  os dados.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px", fontWeight: "bold"}}>
                  3.5. Destinatários e transferência dos dados pessoais
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  Os dados pessoais do usuário não serão compartilhadas com terceiros, que serão tratados apenas por
                  este site.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px", fontWeight: "bold"}}>
                  4. Do tratamento dos dados pessoais
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px", fontWeight: "bold"}}>
                  4.1. Do responsável pelo tratamento dos dados (data controller)
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  O controlador, responsável pelo tratamento dos dados pessoais do usuário, é a pessoa física ou
                  jurídica, a autoridade pública, a agência ou outro organismo que, individualmente ou em conjunto
                  com outras, determina as finalidades e os meios de tratamento de dados pessoais.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  Neste site, o responsável pelo tratamento dos dados pessoais coletados é Ha-bicho LTDA,
                  representada por Silvano Camargo Nogueira, que poderá ser contactado pelo e-mail:
                  silvano_adm@habicho.com ou no endereço:
                </p>
                <p style={{marginBottom: "5px", marginLeft: "50px"}}>
                  Rua Alfredo Martins, nº 123 Casa Amarela, Recife, Pernambuco CEP: 50123 - 082
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  O responsável pelo tratamento dos dados se encarregará diretamente do tratamento dos dados
                  pessoais do usuário.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px", fontWeight: "bold"}}>
                  4.2. Do encarregado de proteção de dados (data protection officer)
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  O encarregado de proteção de dados (data protection officer) é o profissional encarregado de
                  informar, aconselhar e controlar o responsável pelo tratamento dos dados , bem como os
                  trabalhadores que tratem os dados, a respeito das obrigações do site nos termos do Regulamento
                  Geral Europeu de Proteção de Dados (RGDP), da Lei federal n. 13.709, de 14 de agosto de 2018
                  (Lei de Proteção de Dados Pessoais) e de outras disposições de proteção de dados presentes na
                  legislação nacional e internacional, em cooperação com a autoridade de controle competente.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  Neste site o encarregado de proteção de dados (data protection officer) é Franscisco Moura da Silva
                  e poderá ser contactado pelo e-mail: francisco_moura@habicho.com
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px", fontWeight: "bold"}}>
                  5. Segurança no tratamento dos dados pessoais do usuário
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px"}}>
                  O site se compromete a aplicar as medidas técnicas e organizativas adequadas para assegurar um
                  nível de segurança adequado ao risco, tendo em conta as técnicas mais avançadas, os custos de
                  aplicação e a natureza, o âmbito, o contexto e as finalidades do tratamento, bem como os riscos, de
                  probabilidade e gravidade variável, para os direitos e liberdades do usuário.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px"}}>
                  Para tanto, o site utiliza certificado SSL (Secure Socket Layer) que garante que os dados pessoais se
                  transmitam de forma segura e confidencial, de maneira que a transmissão dos dados entre o servidor
                  e o usuário, e em retroalimentação, ocorra de maneira totalmente cifrada ou encriptada.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px"}}>
                  No entanto, o site se exime da responsabilidade por culpa exclusiva de terceiro, como em caso de
                  ataque de hackers ou crackers, ou culpa exclusiva do usuário, que, por exemplo, transfere seus
                  dados a terceiro, exceto se a pirataria se deu em razão de falha de segurança do site. O site se
                  compromete, ainda, a comunicar o usuário em prazo adequado caso ocorra algum tipo de violação
                  da segurança de seus dados pessoais que possa lhe causar um alto risco para seus direitos e
                  liberdades pessoais.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px"}}>
                  A violação de dados pessoais é uma violação da segurança que provoque, de modo acidental ou
                  ilícito, a destruição, a perda, a alteração, a divulgação ou o acesso, não autorizados, a dados
                  pessoais transmitidos, conservados ou sujeitos a qualquer outro tipo de tratamento.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px"}}>
                  Por fim, o site se compromete a tratar os dados pessoais do usuário com confidencialidade, dentro
                  dos limites legais.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px", fontWeight: "bold"}}>
                  6. Dados de navegação (Cookies)
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px"}}>
                  O site recorre eventualmente às técnicas de "cookies", que lhe permitem analisar as estatísticas e as
                  informações sobre a navegação do usuário. Os "cookies" são pequenas quantidades de informação
                  que são armazenadas pelo navegador do usuário para que o servidor se lembre de determinada
                  informação que posteriormente e unicamente o servidor que a implementou poderá ler. Podem ser
                  fornecidos, por exemplo, dados sobre o dispositivo utilizado pelo usuário e o seu local e horário de
                  acesso. Esta coleta de informações busca melhorar a navegação, para o conforto do usuário, ao
                  permitir apresentar-lhe serviços personalizados, de acordo com suas preferências.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px"}}>
                  Os "cookies" não permitem extrair qualquer informação do disco rígido do usuário, nem roubar
                  qualquer tipo de informação pessoal. A única maneira na qual informações privadas do usuário
                  formem parte dos dados de navegação é que o usuário dê pessoalmente essa informação ao servidor.
                  Os "cookies" que permitem identificar uma pessoa são considerados dados pessoais. Dessa forma,
                  as mesmas regras descritas anteriormente se aplicam aos "cookies".
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px"}}>
                  Estes dados de navegação poderão, ainda, ser compartilhados com eventuais parceiros do site,
                  buscando o aprimoramento dos produtos e serviços ofertados ao usuário.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px"}}>
                  O usuário poderá se opor ao registro de "cookies" pelo site, bastando desativar esta opção no seu
                  próprio navegador ou aparelho. Por outro lado, a desativação deste registro poderá afetar a
                  disponibilidade de algumas ferramentas e alguns serviços do site.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px", fontWeight: "bold"}}>
                  6.1. Cookies do site  
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  Os "cookies" do site são aqueles cookies que são enviados ao computador ou dispositivo do usuário
                  e administrador exclusivamente pelo site, para o seu melhor funcionamento.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  A informação coletada é usada para melhorar a qualidade do site e o seu conteúdo e experiência
                  para o usuário. Essas informações permitem reconhecer o usuário como visitante recorrente do site
                  e adaptar o conteúdo para lhe oferecer conteúdos adaptados à sua preferência.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px", fontWeight: "bold"}}>
                  6.2. Cookies de redes sociais
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  O site utiliza plugins de redes sociais, que permitem acessá-las a partir do site. Dessa forma, os
                  cookies de redes sociais podem ser armazenados no navegador do usuário. Os titulares das redes
                  sociais dispõem de sua própria política de privacidade e de proteção de dados e cookies, sendo eles,
                  em cada caso, responsáveis dos dados pessoais coletados e de suas práticas de privacidade. O
                  usuário deve pesquisar junto às redes sociais como os seus dados pessoais são tratados. Unicamente
                  a título informativo, se indicam os seguintes links em que se poderá consultar as políticas de
                  privacidade e cookies de algumas das principais redes sociais:
                </p>
                <p style={{marginBottom: "5px", marginLeft: "60px"}}>
                  <a href="https://www.facebook.com/policies/cookies/">Facebook, </a>
                  <a href="https://twitter.com/pt/privacy">Twitter, </a> 
                  <a href="https://help.instagram.com/1896641480634370?ref=ig">Instagram, </a>
                  <a href="https://policies.google.com/privacy?hl=pt-BR&gl=pt">Youtube, </a> 
                  <a href="https://policies.google.com/technologies/cookies?hl=pt">Google+, </a> 
                  <a href="https://policy.pinterest.com/pt-br/privacy-policy">Pinterest, </a>
                  <a href="https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies">LinkedIn</a>
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px", fontWeight: "bold"}}>
                  6.3. Gestão dos cookies e configurações do navegador
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  O usuário pode gerir os cookies diretamente em seu navegador. Contudo, cancelando os cookies o
                  navegador pode remover preferências salvas no site.
                </p>
                <p style={{marginBottom: "5px", marginLeft: "40px"}}>
                  A seguir você encontra alguns links que direcionam à seção de ajuda dos navegadores mais
                  utilizados, para verificar como gerir os cookies:
                </p>
                <p style={{marginBottom: "5px", marginLeft: "60px"}}>
                  <a 
                    href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorerdelete-manage-cookies"
                  >Internet explorer, </a>
                  <a 
                    href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                  >Safari, </a>
                  <a 
                    href="https://support.google.com/chrome/answer/95647?hl=pt-BR&hlrm=pt"
                  >Google Chrome, </a> 
                  <a 
                    href="https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sitesusam"
                  >Mozila Firefox, </a> 
                  <a 
                    href="https://www.opera.com/help/tutorials/security/privacy/"
                  >
                    Opera
                  </a>
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px", fontWeight: "bold"}}>
                  7. Reclamação a uma autoridade de controle
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px"}}>
                  Sem prejuízo de qualquer outra via de recurso administrativo ou judicial, todos os titulares de dados
                  têm direito a apresentar reclamação a uma autoridade de controle. A reclamação poderá ser feita à
                  autoridade da sede do site, do país de residência habitual do usuário, do seu local de trabalho ou do
                  local onde foi alegadamente praticada a infração.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <ListGroup>
              <h5>
                X. DO SERVIÇO DE ATENDIMENTO AO USUÁRIO
              </h5>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px"}}>
                  Em caso de dúvidas, sugestões ou problemas com a utilização do site <strong>Ha-bicho</strong>, o usuário poderá
                  contatar diretamente o seu serviço de atendimento, através do endereço de e-mail: atendimento@ha-
                  bicho.com , bem como do telefone: +55 81 3224 - 5871. Estes serviços de atendimento ao usuário
                  estarão disponíveis nos seguintes dias e horários:
                </p>
                <p style={{marginBottom: "5px"}}>
                  Segunda a Sexta – 8h às 18h
                </p>
                <p style={{marginBottom: "5px"}}>
                  O usuário poderá, ainda, optar por enviar correspondência ao endereço da sede do site <strong>Ha-bicho</strong>,
                  informado no início deste documento.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <ListGroup>
              <h5>
                XI. DAS SANÇÕES
              </h5>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px"}}>
                  Sem prejuízo das demais medidas legais cabíveis, o editor do site <strong>Ha-bicho</strong> poderá, a qualquer
                  momento, advertir, suspender ou cancelar a conta do usuário:
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px"}}>
                  a) que descumprir quaisquer dos dispositivos contidos no presente instrumento;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px"}}>
                  b) que descumprir os seus deveres de usuário;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px"}}>
                  c) que praticar atos fraudulentos ou dolosos;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px"}}>
                  d) que praticar atos que resultem na instabilidade dos serviços da <strong>Ha-bicho</strong>;
                </p>
                <p style={{marginBottom: "5px", marginLeft: "20px"}}>
                  e) cujo comportamento constitua ou possa vir a importar ofensa ou dano a terceiro ou ao próprio
                  site.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <ListGroup>
              <h5>
                XII. DAS ALTERAÇÕES
              </h5>
              <ListGroupItem className="content">
                <p style={{marginBottom: "5px"}}>
                  A presente versão dos termos e condições gerais de uso foi atualizada pela última vez em:
                  25/11/2020.
                </p>
                <p style={{marginBottom: "5px"}}>
                  O editor se reserva o direito de modificar, a qualquer momento e sem qualquer aviso prévio, o site e
                  os serviços, bem como as presentes normas, especialmente para adaptá-las às evoluções do site <strong>Ha-bicho</strong>, seja pela disponibilização de novas funcionalidades, seja pela supressão ou modificação
                  daquelas já existentes.
                </p>
                <p style={{marginBottom: "5px"}}>
                  Dessa forma, convida-se o usuário a consultar periodicamente esta página para verificar as
                  atualizações.
                </p>
                <p style={{marginBottom: "5px"}}>
                  Caso o usuário não esteja de acordo, é direito só mesmo solicitar, imediatamente, o cancelamento
                  de sua conta e apresentar a sua ressalva ao serviço de atendimento, se assim o desejar.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          <Col>
            <p style={{textAlign: "center", fontWeight: "bold", fontSize: "20px"}}>
              Seja bem-vindo(a)!
            </p>
            <p style={{textAlign: "center", color: "#333366", fontSize: "25px"}}>
              A equipe <strong>Ha-bicho</strong> lhe deseja uma excelente navegação!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TermosCompromisso;
