<script lang='ts' setup>
import { ElMessage } from 'element-plus'
import { nextTick, onMounted, ref } from 'vue'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const messages = ref<Message[]>([])
const userInput = ref('')
const loading = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)

const userAvatar = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
const aiAvatar = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'

async function scrollToBottom() {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

async function sendMessage() {
  if (!userInput.value.trim()) {
    ElMessage.warning('请输入内容')
    return
  }

  const userMessage = userInput.value
  messages.value.push({
    role: 'user',
    content: userMessage,
  })

  userInput.value = ''
  loading.value = true

  try {
    // TODO: 这里添加实际的AI API调用
    // 模拟AI响应
    await new Promise(resolve => setTimeout(resolve, 1000))
    messages.value.push({
      role: 'assistant',
      content: '这是一个模拟的AI响应。请在实际使用时替换为真实的AI API调用。',
    })
  }
  catch (error: any) {
    ElMessage.error('发送消息失败', error)
  }
  finally {
    loading.value = false
    scrollToBottom()
  }
}

onMounted(() => {
  messages.value.push({
    role: 'assistant',
    content: '你好！我是AI助手，有什么我可以帮你的吗？',
  })
})
</script>

<template>
  <section class="page-shell ai-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Chat
      </p>
      <h1 class="page-title">
        Ai
      </h1>
      <p class="page-description">
        维持原有聊天交互，外观升级为左右留白更舒服的对话面板。
      </p>
    </header>

    <div class="surface-panel chat-container">
      <div ref="messagesContainer" class="chat-messages">
        <div
          v-for="(message, index) in messages" :key="index"
          class="message" :class="[message.role === 'user' ? 'user-message' : 'ai-message']"
        >
          <div class="message-content">
            <el-avatar :size="32" :src="message.role === 'user' ? userAvatar : aiAvatar" />
            <div class="message-text">
              {{ message.content }}
            </div>
          </div>
        </div>
      </div>

      <div class="input-container">
        <el-input
          v-model="userInput"
          type="textarea"
          :rows="3"
          placeholder="请输入您的问题..."
          @keyup.enter.ctrl="sendMessage"
        />
        <el-button type="primary" :loading="loading" @click="sendMessage">
          发送
        </el-button>
      </div>
    </div>
  </section>
</template>

<style lang='scss' scoped>
.ai-page {
  min-height: 100%;
  
}

.chat-container {
  max-width: 920px;
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 22px;
}

.message {
  margin-bottom: 20px;
}

.message-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.message-text {
  padding: 12px 16px;
  border-radius: 16px;
  max-width: 80%;
  word-break: break-word;
}

.user-message .message-content {
  flex-direction: row-reverse;
}

.user-message .message-text {
  background: linear-gradient(135deg, #2563eb, #0ea5e9);
  color: white;
}

.ai-message .message-text {
  background-color: rgba(255, 255, 255, 0.86);
  color: #1e293b;
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.input-container {
  padding: 18px 22px 22px;
  border-top: 1px solid rgba(148, 163, 184, 0.18);
  display: flex;
  gap: 12px;
  background: rgba(255, 255, 255, 0.45);
}

.input-container .el-button {
  align-self: flex-end;
}
</style>
